import convertFileToJson from '../convertFileToJson'

describe('Convert file to json', () => {
  test('package 1 test', async () => {
    const packageJson = await convertFileToJson(
      'src/__tests__/resources/package1.json',
      'utf8'
    )
    expect(packageJson).toEqual({
      name: 'my-typescript-app',
      version: '1.0.0',
      description: 'My TypeScript app',
      main: 'dist/index.js',
      scripts: {
        build: 'tsc',
        test: 'jest',
        format: 'prettier --write "src/**/*.ts"',
        dev: "nodemon --watch 'src/**/*.ts' --exec 'npm run test && npm run build'",
        start: 'node dist/index.js',
      },
      dependencies: {},
      devDependencies: {
        '@types/jest': '^27.4.0',
        jest: '^27.4.5',
        nodemon: '^2.0.14',
        prettier: '^2.4.1',
        'ts-jest': '^27.1.3',
        typescript: '^4.5.4',
      },
      jest: {
        preset: 'ts-jest',
        testEnvironment: 'node',
        testMatch: ['**/*.test.ts'],
      },
    })
  })
  test('package invalid avec une erreur', async () => {
    await expect(
      convertFileToJson('src/__tests__/resources/package_invalid.txt', 'utf8')
    ).rejects.toThrowError()
  })
  test('package inexistant tire une erreur', async () => {
    await expect(
      convertFileToJson('IMPOSSIBLE/imposible.json', 'utf8')
    ).rejects.toThrowError()
  })
})
