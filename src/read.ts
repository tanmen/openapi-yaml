import {readFile} from "fs/promises";
import {safeLoad} from "js-yaml";

export const read = (path: string) =>
  readFile(path, {encoding: 'utf-8'})
    .then(file => safeLoad(file))
