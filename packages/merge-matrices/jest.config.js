
module.exports = {
  coverageProvider: "v8",
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  }
};
