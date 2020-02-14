export default interface IQuestionaire {
	printWelcomeMessage: () => void
	getProjectName: () => Promise<string>
	getTestingChoice: () => Promise<boolean>
}
