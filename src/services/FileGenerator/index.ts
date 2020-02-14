import * as fs from "fs"
import { ProjectConfig } from "../../types"
import FileConfig from "../../types/fileConfig"
import IFileGenerator from "./IFileGenerator"

export class FileGenerator implements IFileGenerator {
	constructor(private projectConfig: ProjectConfig, private fileConfig: FileConfig) {}
	public createPackage = () => {
		const config = this.fileConfig.packageJson
		config.name = this.projectConfig.projectName
		if (this.projectConfig.testingIncluded) {
			config.dependencies = { jest: "^25.1.0", "@types/jest": "^24.9.1" }
		}
		const data = JSON.stringify(config, null, 4)
		fs.writeFileSync("package.json", data)
	}
	public createTslint = () => {
		const data = JSON.stringify(this.fileConfig.tslint, null, 4)
		fs.writeFileSync("tslint.json", data)
	}
	public createTsConfig = () => {
		const data = JSON.stringify(this.fileConfig.tsconfig, null, 4)
		fs.writeFileSync("tsconfig.json", data)
	}
	public createIndex = () => {
		const data = this.fileConfig.index
		if (!fs.existsSync("src")) fs.mkdirSync("src")
		fs.writeFileSync("src/index.ts", data)
	}
	public createTestingSetup = () => {
		const data = this.fileConfig.testing.join("\r\n")
		if (!fs.existsSync("test")) fs.mkdirSync("test")
		fs.writeFileSync("test/index.test.ts", data)
	}
	public createGitignore = () => {
		const data = this.fileConfig.gitignore.join("\r\n")
		fs.writeFileSync(".gitignore", data)
	}
	public createAllPackages = () => {
		this.createPackage()
		this.createTsConfig()
		this.createTslint()
		this.createIndex()
		this.createGitignore()
		if (this.projectConfig.testingIncluded) this.createTestingSetup()
	}
}

export default FileGenerator
