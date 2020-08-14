import {glob} from "glob";
import {readFile} from "fs/promises";
import {join} from "path";
import {safeLoad} from "js-yaml";
import {File} from "./types";

export const fetch = (path: string): Promise<File[]> =>
  findYaml(path)
    .then(readYamlFiles(path));

const findYaml = (path: string): Promise<string[]> =>
  new Promise<string[]>((resolve, reject) =>
    glob('**/*.{yml,yaml}', {cwd: path}, (er, files) => {
      er ? reject(er) : resolve(files);
    }));

const readYamlFiles = (path: string) =>
  (files: string[]) => Promise.all(files.map(file => readFile(join(path, file), {encoding: 'utf-8'})
    .then(data => ({
      path: file,
      data: safeLoad(data)
    }))));
