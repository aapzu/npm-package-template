import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    restoreMocks: true,
    setupFiles: ['./test/setupTests.mts'],
    typecheck: {
      enabled: true,
    },
  },
})
