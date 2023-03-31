export default function (
  packageJson: Record<string, any>,
  language: string
): string {
  const { dependencies, devDependencies } = packageJson
  let dependenciesPairs = getDependencies(dependencies) || []
  let devDependenciesPairs = getDependencies(devDependencies) || []
  return `Ce projet contient les dépendances ${devDependenciesPairs
    .concat(dependenciesPairs)
    .join(', ')}`
}

function getDependencies(dependencies: Record<string, any>): [string, any][] {
  if (!dependencies) {
    return []
  }
  return Object.entries(dependencies)
}
