import * as nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './src',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
