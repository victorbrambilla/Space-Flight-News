
const config = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', 'main/config/tests'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],

  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.out/', '/public/'],
};

export default config;
