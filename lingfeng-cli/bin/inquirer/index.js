const inquirer = require("inquirer");

async function test() {
  const res = await inquirer.prompt([
    {
      type: "input",
      message: "your name:",
      name: "name",
      default: "username",
      validate: function (v) {
        return typeof v === "string";
      },
      transformer: function (v) {
        return "[ " + v + " ]";
      },
      filter: function (v) {
        return "name:" + v;
      },
    },
    {
      type: "confirm",
      message: "your choice:",
      name: "choice",
      default: false,
    },
    {
      type: "list",
      message: "your list:",
      name: "list",
      default: 0,
      choices: [
        { value: 1, name: "js" },
        { value: 2, name: "css" },
        { value: 3, name: "html" },
      ],
    },
    {
      type: "rawlist",
      message: "your rawlist:",
      name: "rawList",
      default: 0,
      choices: [
        { value: 1, name: "node" },
        { value: 2, name: "php" },
        { value: 3, name: "java" },
      ],
    },
    {
      type: "checkbox",
      message: "your checkbox:",
      name: "checkbox",
      default: 0,
      choices: [
        { value: 1, name: "vue" },
        { value: 2, name: "react" },
        { value: 3, name: "angular" },
      ],
    },
    {
      type: "password",
      message: "your password:",
      name: "password",
    },
  ]);
  console.log("res:", res);
}

test();

// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "your name:",
//       name: "name",
//       default: "username",
//       validate: function (v) {
//         return typeof v === "string";
//       },
//       transformer: function (v) {
//         return "[ " + v + " ]";
//       },
//       filter: function (v) {
//         return "name:" + v;
//       },
//     },
//     {
//       type: "confirm",
//       message: "your choice:",
//       name: "choice",
//       default: false,
//     },
//     {
//       type: "list",
//       message: "your list:",
//       name: "list",
//       default: 0,
//       choices: [
//         { value: 1, name: "js" },
//         { value: 2, name: "css" },
//         { value: 3, name: "html" },
//       ],
//     },
//     {
//       type: "rawlist",
//       message: "your rawlist:",
//       name: "rawList",
//       default: 0,
//       choices: [
//         { value: 1, name: "node" },
//         { value: 2, name: "php" },
//         { value: 3, name: "java" },
//       ],
//     },
//     {
//       type: "checkbox",
//       message: "your checkbox:",
//       name: "checkbox",
//       default: 0,
//       choices: [
//         { value: 1, name: "vue" },
//         { value: 2, name: "react" },
//         { value: 3, name: "angular" },
//       ],
//     },
//     {
//       type: "password",
//       message: "your password:",
//       name: "password",
//     },
//   ])
//   .then((answers) => {
//     console.log(answers);
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
