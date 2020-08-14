import {fetch} from "./fetch";

export const yamler = (path: string = process.cwd()) =>
  fetch(path)
