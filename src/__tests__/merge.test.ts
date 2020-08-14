import {merge} from "../merge";

describe('merge', () => {
  it('should merge object for File', () =>
    expect(merge([{path: 'test/ora.yml', data: {test: 'test'}}]))
      .toEqual({test: {ora: {test: 'test'}}}));
});
