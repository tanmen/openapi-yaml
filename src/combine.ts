import {join} from "path";
import {extract} from "./extract";
import {merge} from "./merge";

export const combine = async (yml: any, option: { path: string }): Promise<any> => {
  if (typeof yml !== 'object') return yml;
  else if (Array.isArray(yml)) return Promise.all(yml.map(y => combine(y, option)))
  return shape(yml, option)
}

const shape = async (yml: any, option: { path: string }): Promise<any> => {
  if (yml.hasOwnProperty('$dir')) {
    const _yml = {...yml};
    delete _yml.$dir;
    const path = join(option.path, yml.$dir);
    const $dir = await combine(merge(await extract(path)), {path});
    return {
      ...(await combine(_yml, option)),
      ...$dir
    }
  }
  return Object.entries(yml).reduce(
    async (y, [key, value]) => y.then(async v => ({...v, [key]: await combine(value, option)})), Promise.resolve({}))
}
