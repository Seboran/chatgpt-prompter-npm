import createPromptFromJson from '../createPromptFromJson'

describe('create prompt from json', () => {
  test('creates prompt for typescript, jest, prettier and nodemon project', async () => {
    const package1json = require('./resources/package1.json')
    const promptedPackage1 = createPromptFromJson(package1json, 'fr')
    expect(promptedPackage1).toContain('typescript 4')
    expect(promptedPackage1).toContain('jest 27')
    expect(promptedPackage1).toContain('prettier 2')
    expect(promptedPackage1).toContain('nodemon 2')
  })
  test('creates prompt for react project', () => {
    const packageReactJson = require('./resources/createReactAppPackage.json')
    const promptedReactPackage = createPromptFromJson(packageReactJson, 'fr')
    expect(promptedReactPackage).toContain('react 17')
  })
  test('create prompt for express project', () => {
    const packageExpressJson = require('./resources/expressPackage.json')
    let promptedExpressJson = createPromptFromJson(packageExpressJson, 'fr')
    expect(promptedExpressJson).toContain('express 4')
    expect(promptedExpressJson).toContain('nodemon 2')
    expect(promptedExpressJson).toContain('jest 27')
    expect(promptedExpressJson).toContain('eslint 7')
    expect(promptedExpressJson).toContain('prettier 4')
  })
  test('create prompt for next project', () => {
    const packageNextJson = require('./resources/nextPackage.json')
    const promptedExpressJson = createPromptFromJson(packageNextJson, 'fr')
    expect(promptedExpressJson).toContain('polka next')
  })
})
