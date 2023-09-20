const config = {
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,tsx}'],
  coveragePathIgnorePatterns: ['src/types/'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  preset: 'ts-jest',
};

module.exports = config;
