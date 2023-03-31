import createPromptFromJson from '../createPromptFromJson'

describe.skip('create prompt from json', () => {
  test('creates prompt for typescript, jest, prettier and nodemon project', async () => {
    const package1json = require('./resources/package1.json')
    const promptedPackage1 = createPromptFromJson(package1json, 'fr')
    expect(promptedPackage1).toContain('typescript')
    expect(promptedPackage1).toContain('jest')
    expect(promptedPackage1).toContain('prettier')
    expect(promptedPackage1).toContain('nodemon')
  })
  test('creates prompt for react project', () => {
    const packageReactJson = require('./resources/createReactAppPackage.json')
    const promptedReactPackage = createPromptFromJson(packageReactJson, 'fr')
    expect(promptedReactPackage).toContain('react')
  })
  test('create prompt for express project', () => {
    const packageExpressJson = require('./resources/expressPackage.json')
    let promptedExpressJson = createPromptFromJson(packageExpressJson, 'fr')
    expect(promptedExpressJson).toContain('express')
    expect(promptedExpressJson).toContain('nodemon')
    expect(promptedExpressJson).toContain('jest')
    expect(promptedExpressJson).toContain('eslint')
    expect(promptedExpressJson).toContain('prettier')
  })
})
