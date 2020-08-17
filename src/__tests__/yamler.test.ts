import {join} from "path";
import {yammy} from "../yammy";

describe('yamler', () => {
  it('should extract yaml', () => {
    const path = join(__dirname, 'dummy', 'main.yml');
    return expect(yammy(path))
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
