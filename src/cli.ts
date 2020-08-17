import commandLineArgs, {CommandLineOptions} from 'command-line-args';
import {yammy} from "./yammy";
import {writeFile} from "fs/promises";

const optionDefinitions = [
  {name: 'yaml', defaultOption: true},
  {name: 'output', alias: 'o', type: String}
]

const options = commandLineArgs(optionDefinitions) as CommandLineOptions & { output: string; yaml: string };

yammy(options.yaml)
  .then(yml => writeFile(options.output, yml))
