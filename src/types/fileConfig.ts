export type FileConfig = {
	packageJson: PackageJsonDTO
	tslint: TslintDTO
	tsconfig: TsconfigDTO
	index: IndexDTO
	gitignore: GitignoreDTO
	testing: TestingDTO
}
export type PackageJsonDTO = {
	name: string
	version?: string
	description?: string
	main?: string
	scripts?: {
		build?: string
		start?: string
		test?: string
	}
	devDependencies?: {}
	dependencies?: {}
}
export type TslintDTO = {
	defaultSeverity: string
	extends: string[]
	jsRules: {}
	rules: {}
	rulesDirectory: []
}
export type TsconfigDTO = {
	compilerOptions: {
		target: string
		module: string
		outDir: string
		sourceMap: boolean
	}
	include: string[]
	exclude: string[]
}
export type IndexDTO = string
export type GitignoreDTO = string[]
export type TestingDTO = string[]
export default FileConfig
