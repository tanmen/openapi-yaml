import {fetch} from "../fetch";
import { join } from "path";

describe('search', () => {
  it('should find for absolute path',  () => {
    const path = join(__dirname, 'dummy');
    expect(fetch(path)).resolves.toEqual([ 'dummy/pets/get.yml', 'dummy/pets/post.yml' ])
  });

  it('should find for relative path',  () => {
    const path = join(__dirname, '..', '__tests__','dummy');
    expect(fetch(path)).resolves.toEqual([ 'dummy/pets/get.yml', 'dummy/pets/post.yml' ])
  });
});
