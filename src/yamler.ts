import {combine} from "./combine";
import {read} from "./read";
import { dirname } from "path";

export const yamler = (path: string = process.cwd()) =>
  read(path)
    .then(file => combine(file, {path: dirname(path)}))
