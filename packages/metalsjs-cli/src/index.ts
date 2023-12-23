import { Command } from "commander";
import pkg from "../package.json";
import { create } from "./command/create";
import { init } from "./command/init";
import { build } from "./command/build";

const program = new Command();

// 配置版本号信息
program.name(pkg.name).version(pkg.version);

// 创建文件命令
program.command("create").description("create a new project").action(create);

// init 指令
program.command("init").description("Initialization instruction").action(init);

// build 指令
program.command("build").description("build package instruction").action(build);

// 解析参数
program.parse(process.argv);
