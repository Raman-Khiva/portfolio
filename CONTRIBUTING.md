# Contributing Guidelines

Thank you for considering contributing to this portfolio repository! Whether you are pointing out bugs, suggesting improvements, or submitting a pull request, your input is greatly appreciated.

---

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## How to Contribute

### 1. Reporting Bugs
Before creating a bug report, please check existing issues to avoid duplicates. When filing a bug report, include:
- Clear and descriptive title.
- Steps to reproduce the issue.
- Expected behavior vs. actual behavior.
- Environment details (Browser, Node version, OS).

### 2. Feature Requests
Feature suggestions are welcome! Please open an issue outlining:
- The problem your feature solves.
- Proposed implementation details or UI mockup.

### 3. Submitting Pull Requests (PRs)
1. **Fork & Clone** the repository:
   ```bash
   git clone https://github.com/[YOUR_GITHUB_USERNAME]/portfolio.git
   cd portfolio
   ```
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Install Dependencies & Make Changes**:
   ```bash
   pnpm install
   ```
4. **Lint and Typecheck**:
   Ensure all checks pass before submitting:
   ```bash
   pnpm run lint
   pnpm run typecheck
   pnpm run build
   ```
5. **Commit your changes**:
   Use clear, conventional commit messages:
   ```bash
   git commit -m "feat(ui): add interactive project filter"
   ```
6. **Push and Open a Pull Request**:
   Push to your fork and submit a PR to `main`.

---

## Coding Standards & Conventions

- **Framework**: Next.js (App Router), React 19, TypeScript.
- **Styling**: Tailwind CSS v4 & custom CSS variables (`globals.css`).
- **Formatting**: Format code with Prettier (`pnpm run format`).
- **Components**: Place reusable visual components in `components/` and UI primitives in `components/ui/`.
- **Clean Code**: Follow modular principles, maintain clean prop interfaces, and handle loading/error states gracefully.
