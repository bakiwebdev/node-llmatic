import { readPackageJson } from "./utils.mjs";
import { program } from "commander";

const { version, description } = await readPackageJson();

program
  .version(version)
  .description(description)
  .command("config", "configure LLMatic")
  .command("start", "start LLMatic server");

await program.parseAsync(process.argv);
