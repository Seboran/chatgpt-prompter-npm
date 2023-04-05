import * as semver from 'semver'

export default function (
  packageJson: Record<string, any>,
  language: string
): string {
  const { dependencies, devDependencies } = packageJson
  let dependenciesPairs = getDependencies(dependencies) || []
  let devDependenciesPairs = getDependencies(devDependencies) || []
  return `Ce projet contient les dépendances ${devDependenciesPairs
    .concat(dependenciesPairs)
    .map(extractDepencencyPair)
    .join(', ')}`
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
  const versionWithoutPrefix = removePrefix(versionWithPrefix)
  return [key, semver.major(versionWithoutPrefix)].join(' ')
}

function removePrefix(versionWithPrefix: string): string {
  const firstDigitPosition = versionWithPrefix.search(/\d/)
  return versionWithPrefix.slice(firstDigitPosition)
}
