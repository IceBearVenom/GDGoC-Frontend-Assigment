# GDGOC UGM – Frontend Assignment

A frontend website developed as part of the Google Developer Groups on Campus (GDGOC) UGM Frontend Assignment.

## About the Project

This project is a web implementation of the GDGOC UGM website, focusing on a clean, responsive, and user-friendly interface.

The website provides information about GDGOC UGM through several pages and sections, allowing visitors to explore the organization and its activities.

## Tech Stack

- **React** – Component-based UI development.
- **TypeScript** – Static typing and improved code maintainability.
- **Vite** – Frontend development and build tooling.
- **Tailwind CSS** – Utility-first CSS framework.
- **React Router** – Client-side navigation.
- **Lucide React** – Icon library.

## Project Structure

```text
src/
├── components/    # Reusable UI components
├── pages/          # Website pages
├── App.tsx         # Main application component
└── main.tsx        # Application entry point
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/IceBearVenom/GDGoC-Frontend-Assigment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd GDGoC-Frontend-Assigment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Run the development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build |

## Production Build

To generate an optimized production build, run:

```bash
npm run build
```

The generated files will be available in the `dist/` directory.

## Deployment

The project can be deployed using platforms such as Vercel or Netlify by connecting the GitHub repository and using the following build settings:

- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

**Developed by IceBearVenom**  
GDGOC UGM Frontend Assignment