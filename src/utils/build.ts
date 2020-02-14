import { exec } from "child_process"

export const buildApplication = () => exec("npm i && tsc")
