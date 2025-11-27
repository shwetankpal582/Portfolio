"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

// --- WebGL Shader Sources ---
const vertexShaderSource = `
  attribute vec4 a_position;
  void main() {
    gl_Position = a_position;
  }
`;

const fragmentShaderSource = `
precision mediump float;

uniform vec2 iResolution;
uniform float iTime;

#define TAU 6.28318530718
#define MAX_ITER 5

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    float time = iTime * 0.5 + 23.0;

    vec2 uv = fragCoord.xy / iResolution.xy;

    vec2 p = mod(uv * TAU, TAU) - 250.0;
    vec2 i = vec2(p);
    float c = 1.0;
    float inten = 0.005;

    for (int n = 0; n < MAX_ITER; n++) {
        float t = time * (1.0 - (3.5 / float(n + 1)));
        i = p + vec2(
            cos(t - i.x) + sin(t + i.y),
            sin(t - i.y) + cos(t + i.x)
        );
        c += 1.0 / length(vec2(
            p.x / (sin(i.x + t) / inten),
            p.y / (cos(i.y + t) / inten)
        ));
    }

    c /= float(MAX_ITER);
    c = 1.17 - pow(c, 1.4);

    vec3 colour = vec3(pow(abs(c), 8.0));
    colour = clamp(colour + vec3(0.0, 0.35, 0.5), 0.0, 1.0);

    fragColor = vec4(colour, 1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

// --- Types & Interfaces ---
export type BlurSize = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export interface ParticleConfig {
    x: number;
    y: number;
    vx: number;
    vy: number;
    scale: number;
    rotation: number;
    rotationDirection: string;
    siner: number;
    steps: number;
    friction: number;
    element: Element | null;
}

export interface ReflectiveBubbleBackgroundProps {
    className?: string;
    particleColor?: string;
    particleSize?: number;
    spawnInterval?: number;
    enableGooEffect?: boolean;
    blurStrength?: number;
    backdropBlurAmount?: BlurSize;
    children?: React.ReactNode;
}

const blurClassMap: Record<BlurSize, string> = {
    none: "backdrop-blur-none",
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
    "2xl": "backdrop-blur-2xl",
    "3xl": "backdrop-blur-3xl",
};

const ReflectiveBubbleBackground: React.FC<ReflectiveBubbleBackgroundProps> = ({
    className,
    particleColor = "#60a5fa", // Lighter blue for better contrast on dark bg
    particleSize = 20, // Slightly smaller for elegance
    spawnInterval = 200,
    enableGooEffect = true,
    blurStrength = 8,
    backdropBlurAmount = "sm",
    children,
}) => {
    // --- WebGL Refs ---
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // --- Particle Refs ---
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();
    const intervalRef = useRef<number>();
    const particlesArrayRef = useRef<ParticleConfig[]>([]);
    const isPausedRef = useRef(false);
    const gooIdRef = useRef('goo-' + Math.random().toString(36).substring(2, 11));
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // --- WebGL Effect ---
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext("webgl");
        if (!gl) {
            console.error("WebGL not supported");
            return;
        }

        const compileShader = (type: number, source: string): WebGLShader | null => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
        if (!vertexShader || !fragmentShader) return;

        const program = gl.createProgram();
        if (!program) return;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Program linking error:", gl.getProgramInfoLog(program));
            return;
        }

        gl.useProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
            gl.STATIC_DRAW
        );

        const positionLocation = gl.getAttribLocation(program, "a_position");
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
        const iTimeLocation = gl.getUniformLocation(program, "iTime");

        let startTime = Date.now();

        const render = () => {
            if (!canvas) return;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            canvas.width = width;
            canvas.height = height;
            gl.viewport(0, 0, width, height);

            const currentTime = (Date.now() - startTime) / 1000;

            gl.uniform2f(iResolutionLocation, width, height);
            gl.uniform1f(iTimeLocation, currentTime);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
            requestAnimationFrame(render);
        };

        const animId = requestAnimationFrame(render);
        return () => cancelAnimationFrame(animId);
    }, []);

    // --- Particle Logic ---
    const createParticleElement = useCallback(() => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.style.cssText =
            "display: block;" +
            "width: " +
            particleSize +
            "px;" +
            "height: " +
            particleSize +
            "px;" +
            "position: absolute;" +
            "transform: translateZ(0px);";
        svg.setAttribute("viewBox", "0 0 67.4 67.4");

        const circle = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );
        circle.setAttribute("cx", "33.7");
        circle.setAttribute("cy", "33.7");
        circle.setAttribute("r", "33.7");
        circle.setAttribute("fill", particleColor);

        svg.appendChild(circle);
        return svg;
    }, [particleSize, particleColor]);

    const createParticle = useCallback((): ParticleConfig => {
        const element = createParticleElement();
        if (particlesRef.current) {
            particlesRef.current.appendChild(element);
        }

        const x = Math.random() * dimensions.width;
        const y = dimensions.height + 100;
        const steps = dimensions.height / 2;
        const frictionValue = 1 + Math.random() * 1; // friction 1-2
        const scale = 0.4 + Math.random() * 2; // scale 0.4-2.4
        const siner = (dimensions.width / 2.5) * Math.random();
        const rotationDirection = Math.random() > 0.5 ? "+" : "-";

        element.style.transform =
            "translateX(" + x + "px) translateY(" + y + "px)";

        return {
            x,
            y,
            vx: 0,
            vy: 0,
            scale,
            rotation: 0,
            rotationDirection,
            siner,
            steps,
            friction: frictionValue,
            element,
        };
    }, [createParticleElement, dimensions]);

    const updateParticle = (particle: ParticleConfig): boolean => {
        particle.y -= particle.friction;

        const left =
            particle.x +
            Math.sin((particle.y * Math.PI) / particle.steps) * particle.siner;
        const top = particle.y;
        const rotation = particle.rotationDirection + (particle.y + particleSize);

        if (particle.element) {
            const element = particle.element as SVGElement;
            element.style.transform =
                "translateX(" +
                left +
                "px) translateY(" +
                top +
                "px) scale(" +
                particle.scale +
                ") rotate(" +
                rotation +
                "deg)";
        }

        if (particle.y < -particleSize) {
            if (particle.element && particle.element.parentNode) {
                particle.element.parentNode.removeChild(particle.element);
            }
            return false;
        }

        return true;
    };

    const animate = useCallback(() => {
        if (isPausedRef.current) {
            animationRef.current = requestAnimationFrame(animate);
            return;
        }

        particlesArrayRef.current =
            particlesArrayRef.current.filter(updateParticle);

        animationRef.current = requestAnimationFrame(animate);
    }, []);

    const spawnParticle = useCallback(() => {
        if (!isPausedRef.current && dimensions.width > 0 && dimensions.height > 0) {
            const particle = createParticle();
            particlesArrayRef.current.push(particle);
        }
    }, [dimensions, createParticle]);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setDimensions({ width: rect.width, height: rect.height });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        if (dimensions.width > 0 && dimensions.height > 0) {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

            animationRef.current = requestAnimationFrame(animate);
            intervalRef.current = window.setInterval(spawnParticle, spawnInterval);
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            particlesArrayRef.current.forEach((particle) => {
                if (particle.element && particle.element.parentNode) {
                    particle.element.parentNode.removeChild(particle.element);
                }
            });
            particlesArrayRef.current = [];
        };
    }, [dimensions, spawnInterval, animate, spawnParticle]);

    const finalBlurClass = blurClassMap[backdropBlurAmount] || blurClassMap["sm"];

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full h-full overflow-hidden",
                className
            )}
        >
            {/* WebGL Background Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Optional Blur Overlay for WebGL */}
            <div className={cn("absolute inset-0 z-0 pointer-events-none", finalBlurClass)} />

            {/* Particles Layer */}
            <div
                ref={particlesRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                style={{
                    filter: enableGooEffect ? "url(#" + gooIdRef.current + ")" : undefined,
                }}
            />

            {/* Content Layer */}
            <div className="relative z-20 w-full h-full">
                {children}
            </div>

            {/* Goo Effect Filter */}
            {enableGooEffect && (
                <svg className="absolute w-0 h-0 z-0">
                    <defs>
                        <filter id={gooIdRef.current}>
                            <feGaussianBlur
                                in="SourceGraphic"
                                result="blur"
                                stdDeviation={blurStrength}
                            />
                            <feColorMatrix
                                in="blur"
                                result="colormatrix"
                                type="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
                            />
                            <feBlend in="SourceGraphic" in2="colormatrix" />
                        </filter>
                    </defs>
                </svg>
            )}
        </div>
    );
};

export default ReflectiveBubbleBackground;
