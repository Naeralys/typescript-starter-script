export default interface IFileGenerator {
	createPackage: () => void
	createTslint: () => void
	createTsConfig: () => void
	createIndex: () => void
	createAllPackages: () => void
}
