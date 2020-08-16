import {combine} from "../combine";

describe('combine', () => {
  it('should combine yml (string)', () =>
    expect(combine('test', {path: ''}))
      .resolves
      .toEqual('test'));
  it('should combine yml', () =>
    expect(combine({test: 'test'}, {path: ''}))
      .resolves
      .toEqual({test: 'test'}));
  it('should combine yml ($dir)', () =>
    expect(combine({$dir: 'common'}, {path: __dirname}))
      .resolves
      .toEqual({example: 'EXAMPLE'}));
});
