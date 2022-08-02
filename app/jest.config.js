/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^~source/(.*)$': '<rootDir>/source/$1',
    '^~shared/(.*)$': '<rootDir>/source/shared/$1',
    '^~mocks/(.*)$': '<rootDir>/tests/mocks/$1',
  },
}
