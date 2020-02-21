import IQuestionaire from "./IQuestionaire"
import IInquirer, { QuestionDTO } from "../../types/IInquirer"

const projectNameQuestion: QuestionDTO<any> = {
	type: "input",
	name: "projectName",
	message: "Project Name:"
}

const testingChoiceQuestion: QuestionDTO<any> = {
	message: "Include testing setup?",
	name: "testingChoiceQuestion",
	type: "confirm"
}

export class Questionaire implements IQuestionaire {
	constructor(private inquirer: IInquirer) {}
	public printWelcomeMessage = () => console.log("- Typescript Starter Script -")
	public getProjectName = async (): Promise<string> =>
		await this.inquirer.prompt(projectNameQuestion).then(async answers => answers.projectName)
	public getTestingChoice = async (): Promise<boolean> =>
		await this.inquirer
			.prompt(testingChoiceQuestion)
			.then(async answers => answers.testingChoiceQuestion)
}

export default Questionaire
