@echo off
echo Moving frontend files...
move "src" "frontend\"
move "public" "frontend\"
move "index.html" "frontend\"
move "components.json" "frontend\"
move "postcss.config.js" "frontend\"
move "tailwind.config.ts" "frontend\"
move "vite.config.ts" "frontend\"
move "tsconfig.app.json" "frontend\"

echo Moving backend files...
move "tsconfig.api.json" "backend\"

echo Restructuring complete.
pause
