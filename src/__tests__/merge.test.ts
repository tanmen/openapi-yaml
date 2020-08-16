import {merge} from "../merge";

describe('merge', () => {
  it('should merge object for File', () =>
    expect(merge([{path: 'test/ora.yml', data: {test: 'test'}}]))
      .toEqual({test: {ora: {test: 'test'}}}));
  it('should merge object for MultiFile', () =>
    expect(merge([{path: 'test/ora.yml', data: {test: 'test'}},
      {path: 'test/ore.yml', data: {test: 'ore'}}]))
      .toEqual({test: {ora: {test: 'test'}, ore: {test: 'ore'}}}));
});
