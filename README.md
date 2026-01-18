# Portfolio

A modern, glassmorphism-themed personal portfolio built with React and Vite, featuring responsive UI components, sectioned pages (Home, About, Projects, Services, Contact), and a styled, accessible design.

**Live URL:** [https://pal-folio-glass.vercel.app/](https://pal-folio-glass.vercel.app/)

## Contact Information

*   **Phone:** +91 9451509640
*   **Email:** shwetankpal582@gmail.com
*   **GitHub:** [shwetankpal582](https://github.com/shwetankpal582)

## Technologies Used

*   **Core:** React 18, TypeScript, Vite
*   **Routing/Data:** React Router, TanStack Query
*   **UI/Styling:** Tailwind CSS, shadcn/ui, Radix UI, Lucide Icons, tailwind-merge, tailwindcss-animate
*   **Forms/Validation:** React Hook Form, Zod, @hookform/resolvers
*   **Charts/UX:** Recharts, Sonner (toasts), Embla carousel
*   **Tooling:** ESLint, @vitejs/plugin-react-swc, PostCSS, Tailwind plugins
*   **Email (server-side route):** Nodemailer (api/contact/route.ts)

## Running Locally

### Requirements

*   Node.js (LTS)
*   npm

### Steps

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **(Optional, for contact form email) Create a `.env` file with:**
    ```bash
    EMAIL_USER=your_gmail_address
    EMAIL_PASS=your_app_password
    ```
    **Note:** The `api/contact/route.ts` endpoint is designed for deployment environments. It may not be served by the Vite dev server without an adapter. You can test it after deployment or wire a local server accordingly.

3.  **Start the dev server:**
    ```bash
    npm run dev
    ```

4.  **Open the app at `http://localhost:8080`**

### Other Commands

*   **Build/preview:**
    ```bash
    npm run build
    npm run preview
    ```
*   **Lint:**
    ```bash
    npm run lint
    ```

### Environment and Aliases

*   Dev server runs on port `8080` (see `vite.config.ts`).
<<<<<<< HEAD
*   Import alias `@` points to `src`.
=======
*   Import alias `@` points to `src`.
>>>>>>> c6ad47b8937dee175f53340bef92e603b5f808e8
