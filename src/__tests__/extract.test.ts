import {join} from "path";
import {extract} from "../extract";

describe('extract', () => {
  it('should find for absolute path', () => {
    const path = join(__dirname, 'dummy');
    return expect(extract(path)).resolves.toEqual([
      {
        data: {
          test: {
            "$dir": "./pets"
          }
        },
        path: "main.yml",
      },
      {
        data: {
          "test": "get",
        },
        path: "pets/get.yml",
      },
      {
        data: {
          "$dir": "../../../common",
        },
        path: "pets/option/response.yml",
      },
      {
        data: {
          "dummy": true,
          "test": "post",
        },
        path: "pets/post.yml",
      },
    ])
  });

  it('should find for relative path', () => {
    const path = join(__dirname, '..', '__tests__', 'dummy');
    return expect(extract(path)).resolves.toEqual([
      {
        data: {
          test: {
            "$dir": "./pets"
          }
        },
        path: "main.yml",
      },
      {
        data: {
          "test": "get",
        },
        path: "pets/get.yml",
      },
      {
        data: {
          "$dir": "../../../common",
        },
        path: "pets/option/response.yml",
      },
      {
        data: {
          "dummy": true,
          "test": "post",
        },
        path: "pets/post.yml",
      }])
  });
});
