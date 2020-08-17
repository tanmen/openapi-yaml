import {join} from "path";
import {openapiYaml} from "../openapi-yaml";

describe('yamler', () => {
  it('should extract yaml', () => {
    const path = join(__dirname, 'dummy', 'main.yml');
    return expect(openapiYaml(path))
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
