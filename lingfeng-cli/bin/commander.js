#!/usr/bin/env node

const commander = require("commander");
const pkg = require("../package.json");

// 获取commander单例
const { program } = commander;

// 手动实例化一个commander
// const program = new commander.Command();

program
  .name(Object.keys(pkg.bin)[0])
  .usage("<command> [options]")
  .version(pkg.version)
  .option("-d, --debug", "是否开启调试模式", false)
  .option("-e, --envName <envName>", "获取环境变量名称");
// .parse(process.argv);

// program.outputHelp();
// console.log(program.opts());

// command 注册命令
program
  .command("clone <source> [destination]")
  .description("克隆一个项目")
  .option("-f --force", "是否强制克隆")
  .action((source, destination, cmdObj) => {
    console.log("do clone", source, destination, cmdObj.force);
  });

// addCommand 注册子命令
const service = new commander.Command("service");
service
  .command("start [port]")
  .description("启动服务")
  .action((port) => {
    console.log("服务已启动, port:", port);
  });
service
  .command("stop")
  .description("停止服务")
  .action(() => {
    console.log("服务已停止");
  });

program.addCommand(service);

// program
//   .command("install [name]", "install package", {
//     executableFile: "lingfeng-cli-dev",
//   })
//   .alias("i");

// 匹配所有命令
// program
//   .arguments("<cmd> [options]")
//   .description("test command", {
//     cmd: "命令名称",
//     options: "命令参数",
//   })
//   .action((cmd, env) => {
//     console.log(cmd, env);
//   });

// 自定义help
// program.helpInformation = function () {
//   return "help info\n";
// };
// program.on('--help',function(){
//   console.log('help info');
// })

// 实现debug模式
program.on("option:debug", function () {
  const opts = program.opts();
  if (opts.debug) {
    process.env.LOG_LEVEL = "verbose";
  }
  console.log(process.env.LOG_LEVEL);
});

// 监听未知命令
program.on("command:*", function (obj) {
  console.error("未知的命令：" + obj[0]);
  const availableCommands = program.commands.map((cmd) => cmd.name());
  console.log("可用命令：" + availableCommands.join(", "));
});

program.parse();
