# Typescript Starter Script
A typescript starter script. I promise, just run the script.

## Installation & Usage

1. Install the package with npm
```sh
npm install -g typescript-starter-script
```

2. Use the package to generate a new typescript project
```sh
typescript-starter-script
```

## What's inside?

How the script generates the project structure as well as the individual files.

    .
    ├── dist
    ├── src
    ├── test
    ├── .gitignore
    ├── package.json
    ├── tsconfig.json
    ├── tslint.json

1.  **`dist`**: This directory contains the generated javascript files, and will act as the executable product for deployment.
2.  **`src`**: This directory contains the typescript source files. This is where you put your source code, e.g develop your software.
3.  **`test`**: This directory contains the test files. It is only included if the "Include testing setup" flag is accepted when running the starter script. Put your test files here with a .test.ts extension, and run them with "npm test".
4.  **`.gitignore`**: A basic .gitignore. List any file here that you wish to not push to any repository, such as config files and .env files.
5.  **`package.json`**: Big boi node package file. Configure this file if you wish to add/change the default generated structure and content.
6.  **`tsconfig.json`**: Typescript compiler options. Add or remove any rules you wish the compiler to use. https://www.typescriptlang.org/docs/handbook/compiler-options.html Here's a full list of all the available features. Not using strict mode on default.
7.  **`tslint.json`**: Will help you use typescript in a structured way. 
https://palantir.github.io/tslint/rules/ For a full list of all the available features.

## Planned extensions
- Personal config file. Provide a .json config file to change the default settings for generating the files.
- [X] Generate project inside a subfolder and not in the current directory. (Currently in dev branch)
- Tests, with CI/CD
- [X] Refactor dependency of the fs package. The FileGenerator should make use of dependency injection to use any file system package, and not directly import the fs package. (Currently in dev branch)

## Contribute

If you have an idea for a missing feature, just fork this repo and make a PR with your suggested implementation.

## Author

#### Adam Lind

## License
MIT
