# INTERACT Website

Welcome to the INTERACT website project! This project is built using Next.js, TypeScript, and Tailwind CSS, and serves as both a portfolio and a showcase for our collaborative online workspace.

## Project Structure

The project is organized as follows:

```
interact-website
├── public
│   ├── favicon.ico          # Favicon for the website
│   └── images               # Directory for images used throughout the website
├── src
│   ├── components           # Contains reusable components
│   │   └── Header.tsx      # Navigation bar and site branding
│   ├── pages                # Contains all the pages of the website
│   │   ├── _app.tsx        # Custom App component for global styles and layout
│   │   ├── index.tsx       # Main landing page showcasing INTERACT's vision, mission, and values
│   │   ├── about.tsx       # Information about INTERACT, including objectives and values
│   │   ├── services.tsx    # List of services offered by INTERACT
│   │   ├── projects.tsx     # Showcases projects undertaken by INTERACT
│   │   ├── tools.tsx       # Details tools and applications used by INTERACT
│   │   └── workspace.tsx    # Describes the collaborative online workspace
│   ├── styles               # Contains global CSS styles
│   │   └── globals.css      # Global styles including Tailwind CSS imports
│   ├── utils                # Utility functions
│   │   └── db.ts           # Functions for database interactions (NoSQL)
│   └── types                # TypeScript types and interfaces
│       └── index.ts
├── .eslintrc.js            # ESLint configuration
├── .gitignore               # Files and directories to ignore by Git
├── next-env.d.ts           # TypeScript definitions for Next.js
├── next.config.js          # Next.js configuration settings
├── package.json             # npm configuration file
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd interact-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the website in action.

## Features

- Showcase of INTERACT's vision, mission, and values.
- Detailed information about services, projects, tools, and collaborative workspace.
- Responsive design using Tailwind CSS for a modern look and feel.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.