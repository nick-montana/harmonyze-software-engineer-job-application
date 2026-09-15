## Code Style Guidelines

- **TypeScript**: Strict type checking, ES modules, explicit return types
- **Naming**: PascalCase for classes/types, camelCase for functions/variables
- **Files**: Lowercase with hyphens, test files with `.test.ts` suffix
- **Imports**: ES module style, no `.js` extension on relative imports (project uses `moduleResolution: bundler`), group imports logically
- **Formatting**: 2-space indentation, semicolons required, single quotes preferred
- **Testing**: Place tests under each package's `test/` directory (vitest only includes `test/**/*.test.ts`), use descriptive test names
- **Comments**: JSDoc for public APIs, inline comments for complex logic