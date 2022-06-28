# Typescript

![Typescript](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/baea85b5e9a9fb5c36ec.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220622%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220622T073923Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=1089ea4b81432caf5aeccab56aabdd2fe5e5894ab2521fd68d264f15ed62e29a)

## Resources
Read or Watch
* [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/basic-types.html)

***Learning Objectives***
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* Basic types in Typecript
* Interfaces, Classes, and functions
* How to work with the DOM and Typescript
* Generic types
* How to use namespaces
* How to merge declarations
* How to use an ambient Namespace to import an external library
* Basic nominal typing with Typescript

***Requirements***
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files should end with a new line
* All your files will be transpiled on Ubuntu 18.04
* Your TS scripts will be checked with jest (version 24.9.* )
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the ts extension when possible
* The Typescript compiler should not show any warning or error when compiling your code

***Configuration Files***
Please use these files for the following tasks

***package.json***
<details>
  <summary>Click to show/hide file contents</summary>

```  
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
```
</details>

***.eslintrc.js***

<details>
  <summary>Click to show/hide file contents</summary>

```
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
```
 
</details>

***tsconfig.json***
<details>
  <summary>Click to show/hide file contents</summary>
  
```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```
</details>

***webpack.config.js***
<details>
  <summary>Click to show/hide file contents</summary>

``` 
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
}; 
``` 
</details>


# Tasks

`0. Creating an interface for a student`

Copy the following configuration files (provided above) into the `task_0 directory: package.json, .eslintrc.js, tsconfig.json, webpack.config.js`

Write your code in the `main.ts` file:

* Write an interface named Student that accepts the following elements: `firstName(string), lastName(string), age(number), and location(string)`
* Create two students, and create an array named `studentsList` containing the two variables
* Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
* Each row should contain the first name of the student and the location
### Requirements:

* When running, Webpack should return No type errors found.
* Every variable should use TypeScript when possible.
*** Repo: ***

* ***GitHub repository:*** `alx-frontend-javascript`
* ***Directory:*** `0x04-TypeScript`
* ***File:*** `task_0/js/main.ts, task_0/package.json, task_0/.eslintrc.js, task_0/tsconfig.json, task_0/webpack.config.js`


