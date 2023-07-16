#!/usr/bin/env node

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const pkg = require("../package.json");

const arg = hideBin(process.argv);
const cli = yargs(arg);
const argv = process.argv.slice(2);
const context = {
  icliVersion: pkg.version,
};
cli
  .usage("Usage: icli <command> [options]")
  .demandCommand(
    1,
    "A command is required. Pass --help to see all available commands and options."
  )
  .strict()
  .recommendCommands()
  .fail((err, msg) => {
    console.log(err);
  })
  .alias("h", "help")
  .alias("v", "version")
  .wrap(cli.terminalWidth())
  .epilogue("Yuor own footer description")
  .options({
    debug: {
      type: "boolean",
      describe: "开启调试模式",
      alias: "d",
    },
  })
  .option("registry", {
    type: "string",
    describe: "定义全局地址",
    alias: "r",
  })
  .group(["debug"], "开发选项:")
  .command(
    "init [name]",
    "初始化一个项目",
    (yargs) => {
      yargs.option("name", {
        type: "string",
        describe: "项目名称",
      });
    },
    (argv) => {
      console.log(argv);
    }
  )
  .command({
    command: "list",
    aliases: ["ls", "la", "ll"],
    handler: (argv) => {
      console.log(argv);
    },
  })
  .parse(argv, context);
