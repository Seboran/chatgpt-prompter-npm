export default function (
  packageJson: Record<string, any>,
  language: string
): string {
  return ''
}

function getDependencies(dependencies: Record<string, any>): string[] {
  return Object.keys(dependencies)
}
