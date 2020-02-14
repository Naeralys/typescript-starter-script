import * as inquirer from "inquirer"
import IQuestionaire from "./IQuestionaire"

const projectNameQuestion: inquirer.QuestionCollection = [
	{ type: "input", name: "projectName", message: "Project Name:" }
]
const testingChoiceQuestion: inquirer.QuestionCollection = {
	message: "Include testing setup?",
	name: "testingChoiceQuestion",
	type: "confirm"
}

export class Questionaire implements IQuestionaire {
	public printWelcomeMessage = () => console.log("- Typescript Starter Script -")
	public getProjectName = async (): Promise<string> =>
		await inquirer.prompt(projectNameQuestion).then(async answers => answers.projectName)
	public getTestingChoice = async (): Promise<boolean> =>
		await inquirer
			.prompt(testingChoiceQuestion)
			.then(async answers => answers.testingChoiceQuestion)
}

export default Questionaire
