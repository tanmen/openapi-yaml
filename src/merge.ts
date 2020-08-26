import set from 'lodash.set';
import {extname, sep, dirname} from 'path';
import {File} from './types'

/**
 * fileをobjectに変換する
 *
 * @param {File[]} files
 * @returns {any}
 */
export const merge = (files: File[]): any =>
  files.reduce(inject, {});

const inject = (obj: any, {path, data}: File) =>
  set(obj, convertPathToProperty(path), incrementPath(data, path));

const convertPathToProperty = (path: string) =>
  path.replace(extname(path), '')
    .split(sep)
    .filter(p => !p.startsWith('_'))
    .map(p => p.replace('@', '/'));

const incrementPath = (data: any, path: string): any => {
  if (typeof data !== 'object') return data;
  else if (Array.isArray(data)) return data.map(d => incrementPath(d, path))
  else if (data.hasOwnProperty('$dir')) {
    const d = {...data};
    delete d.$dir
    return {
      ...incrementPath(d, path),
      $dir: `${dirname(path)}/${data.$dir}`
    }
  }
  return Object.entries(data)
    .reduce((pre, [key, value]) => ({...pre, [key]: incrementPath(value, path)}), {})
}
