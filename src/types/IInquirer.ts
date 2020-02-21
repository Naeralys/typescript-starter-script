export type QuestionDTO<T> = {
	message: string
	type: string
	name: string
}

export default interface IInquirer {
	prompt: <T>(questions: QuestionDTO<T>) => Promise<T>
}
