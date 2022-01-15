module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  collectCoverageFrom: [
    "<rootDir>/src/**/**/*.{ts,tsx}",
    "!<rootDir>/src/index.ts",
    "!<rootDir>/src/components/index.ts",
    "!<rootDir>/src/components/**/*.stories.{ts,tsx}",
  ],
  testMatch: ["<rootDir>/src/**/**/__tests__/*.test.tsx"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -10,
    },
  },
};
