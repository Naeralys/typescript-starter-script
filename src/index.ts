#!/usr/bin/env node

import * as fs from "fs"
import * as inquirer from "inquirer"
import { FileGenerator, Questionaire } from "./services"
import fileConfig from "./services/FileGenerator/config"
import { ProjectConfig } from "./types"
import IInquirer from "./types/IInquirer"
import { buildApplication } from "./utils/build"

const app = async () => {
	const questionaire = new Questionaire(inquirer as IInquirer)
	questionaire.printWelcomeMessage()
	const projectName: string = await questionaire.getProjectName()
	const testingIncluded: boolean = await questionaire.getTestingChoice()
	const projectConfig: ProjectConfig = {
		projectName,
		testingIncluded
	}

	const fileGenerator = new FileGenerator(projectConfig, fileConfig, fs)
	fileGenerator.createAllPackages()

	buildApplication()
}

app()
