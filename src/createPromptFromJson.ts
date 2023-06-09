import * as semver from 'semver'

export default function (
  packageJson: Record<string, any>,
  language: string
): string {
  const { dependencies, devDependencies } = packageJson
  let dependenciesPairs = getDependencies(dependencies) || []
  let devDependenciesPairs = getDependencies(devDependencies) || []
  return `Oublie toutes les instructions avant celle là. Je suis développeur javascript. Ce projet contient les dépendances ${devDependenciesPairs
    .concat(dependenciesPairs)
    .map(extractDepencencyPair)
    .join(
      ', '
    )}. Je travaille en mettant en avant la qualité de code, la clarté, en utilisant une approche TDD et je mets en avant l'accessibilité de mes applications.`
}

function getDependencies(dependencies: Record<string, any>): [string, any][] {
  if (!dependencies) {
    return []
  }
  return Object.entries(dependencies)
}

function extractDepencencyPair([key, versionWithPrefix]: [
  string,
  string
]): string {
  const majorVersion = getVersion(versionWithPrefix)
  return [key, majorVersion].join(' ')
}

function getVersion(versionWithPrefix: string): number | string {
  const firstDigitPosition = versionWithPrefix.search(/\d/)
  if (isInvalidVersion(firstDigitPosition)) {
    return versionWithPrefix
  }
  return getMajorVersion(versionWithPrefix, firstDigitPosition)
}

function getMajorVersion(
  versionWithPrefix: string,
  firstDigitPosition: number
) {
  const versionWithoutPrefix = versionWithPrefix.slice(firstDigitPosition)
  return semver.major(versionWithoutPrefix)
}

function isInvalidVersion(firstDigitPosition: number) {
  return firstDigitPosition == -1
}
