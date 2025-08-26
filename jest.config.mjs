/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  verbose: true,
  extensionsToTreatAsEsm: [".ts"],
  testMatch: ["**/__tests__/**/*.test.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "test/tsconfig.json",
      },
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};

export default config;
