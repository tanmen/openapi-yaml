import {join} from "path";
import {yamler} from "../yamler";

describe('yamler', () => {
  it('should extract yaml', () => {
    const path = join(__dirname, 'dummy', 'main.yml');
    return expect(yamler(path))
      .resolves
      .toEqual({
        test: {
          get: {
            test: "get",
          },
          option: {
            response: {
              example: "EXAMPLE",
            },
          },
          post: {
            dummy: true,
            test: "post",
          }
        }
      });
  });
});
