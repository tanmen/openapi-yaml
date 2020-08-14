import {File} from './types'
import set from 'lodash.set';
import {extname, sep} from 'path';

export const merge = (files: File[]) =>
  files.reduce((obj: any, {path, data}) =>
    set(obj, convertPathToProperty(path), data), {});

const convertPathToProperty = (path: string) =>
  path.replace(extname(path), '').split(sep);
