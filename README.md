# HR System Monorepo

This repository contains a monorepo for an HR system built with Next.js for the frontend and Node.js for the backend API. The project is structured using pnpm workspaces and incorporates TypeScript for type safety, along with ESLint and Prettier for code quality and formatting.

## Project Structure

```
hr-system-monorepo
├── apps
│   ├── web          # Next.js frontend application
│   └── api          # Node.js API application
├── packages
│   ├── ui           # Shared UI components
│   └── utils        # Utility functions
├── .eslintrc.js     # ESLint configuration
├── .prettierrc      # Prettier configuration
├── .commitlintrc.js # Commitlint configuration
├── package.json      # Root package.json for the monorepo
└── pnpm-workspace.yaml # pnpm workspace configuration
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- pnpm (version 6 or higher)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd hr-system-monorepo
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

### Running the Applications

- To start the Next.js frontend application:

  ```
  cd apps/web
  pnpm dev
  ```

- To start the Node.js API:

  ```
  cd apps/api
  pnpm dev
  ```

### Code Quality

This project uses ESLint and Prettier to maintain code quality and consistency. You can run the linting and formatting scripts using:

```
pnpm lint
pnpm format
```

### Commit Messages

This project enforces commit message conventions using commitlint. Please follow the conventional commit format when making commits.

## Core Features

- **Employee Management**: Add, update, delete, and view employee records.
- **Payroll Management**: View and manage payroll information and statistics.
- **Attendance Tracking**: Track and manage employee attendance records.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.