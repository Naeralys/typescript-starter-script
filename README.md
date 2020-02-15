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

## Planned extensions
- Personal config file. Provide a .json config file to change the default settings for generating the files.
- Generate project inside a subfolder and not in the current directory.
- Tests, with CI/CD
- Refactor dependency of the fs package. The FileGenerator should make use of dependency injection to use any file system package, and not directly import the fs package.

## Contribute

If you have an idea for a missing feature, just fork this repo and make a PR with your suggested implementation.

## Author

#### Adam Lind

## License
MIT
