import commandLineArgs, {CommandLineOptions} from 'command-line-args';
import {openapiYaml} from "./openapi-yaml";
import {writeFile} from "fs/promises";
import {safeDump} from "js-yaml";

const optionDefinitions = [
  {name: 'yaml', defaultOption: true},
  {name: 'output', alias: 'o', type: String}
]

const options = commandLineArgs(optionDefinitions) as CommandLineOptions & { output: string; yaml: string };

openapiYaml(options.yaml)
  .then(yml => writeFile(options.output, safeDump(yml), {encoding: 'utf-8'}))
