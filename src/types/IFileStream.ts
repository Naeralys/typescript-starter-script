export default interface IFileStream {
	writeFileSync: (path: string, data: any) => void
	mkdirSync: (path: string) => void
	existsSync: (path: string) => boolean
}
