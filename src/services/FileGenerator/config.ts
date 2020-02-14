import {
	PackageJsonDTO,
	TslintDTO,
	TsconfigDTO,
	IndexDTO,
	GitignoreDTO,
	TestingDTO
} from "../../types/fileConfig"

const packageJson: PackageJsonDTO = {
	name: "Project Name",
	version: "1.0.0",
	description: "",
	main: "dist/index.js",
	scripts: {
		build: "npm i && tsc",
		start: "tsc && node dist/index.js"
	},
	devDependencies: {
		tslint: "^5.12.1",
		typescript: "^3.3.3"
	}
}
const tslint: TslintDTO = {
	defaultSeverity: "error",
	extends: ["tslint:recommended"],
	jsRules: {},
	rules: {
		"no-console": false,
		"trailing-comma": false,
		indent: false,
		semicolon: false,
		"arrow-parens": false,
		curly: false
	},
	rulesDirectory: []
}

const tsconfig: TsconfigDTO = {
	compilerOptions: {
		target: "es6",
		module: "commonjs",
		outDir: "dist",
		sourceMap: true
	},
	include: ["src/**/*.ts"],
	exclude: ["node_modules"]
}
const index: IndexDTO = `console.log("Hello world!")`
const gitignore: GitignoreDTO = ["/node_modules", "package-lock.json", "/dist"]
const testing: TestingDTO = [
	`describe("default testing setup", () => {`,
	`    it("test case", () => {`,
	`        expect(1).toBe(1)`,
	`    })`,
	`})`
]

export default { packageJson, tslint, tsconfig, index, gitignore, testing }
