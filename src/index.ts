import { FileGenerator, Questionaire } from "./services"
import fileConfig from "./services/FileGenerator/config"
import { ProjectConfig } from "./types"
import { buildApplication } from "./utils/build"

const app = async () => {
	const questionaire = new Questionaire()
	questionaire.printWelcomeMessage()
	const projectName: string = await questionaire.getProjectName()
	const testingIncluded: boolean = await questionaire.getTestingChoice()
	const projectConfig: ProjectConfig = {
		projectName,
		testingIncluded
	}

	const fileGenerator = new FileGenerator(projectConfig, fileConfig)
	fileGenerator.createAllPackages()

	buildApplication()
}

app()
