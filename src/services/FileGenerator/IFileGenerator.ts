export default interface IFileGenerator {
	createProjectFolder: () => void
	createPackage: () => void
	createTslint: () => void
	createTsConfig: () => void
	createIndex: () => void
	createAllPackages: () => void
}
