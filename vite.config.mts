import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    restoreMocks: true,
    setupFiles: ['./test/setupTests.ts'],
    typecheck: {
      enabled: true,
    },
  },
})
