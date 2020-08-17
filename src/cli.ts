import commandLineArgs, {CommandLineOptions} from 'command-line-args';
import {yamler} from "./yamler";
import {writeFile} from "fs/promises";

const optionDefinitions = [
  {name: 'yaml', alias: 'y', type: String},
  {name: 'writeFile', alias: 'w', type: String}
]

const options = commandLineArgs(optionDefinitions) as CommandLineOptions & { writeFile: string; yaml: string };

yamler(options.yaml)
  .then(yml => writeFile(options.writeFile, yml))
