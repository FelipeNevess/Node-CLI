import { Json } from './json';

jest.mock('./json');

interface SutTypes {
  sut: Json;
}

const makeSut = (): SutTypes => {
  const sut = new Json();

  return {
    sut,
  };
};

describe('Test Json', () => {
  test('Should return an object with the correct keys in method javascript', () => {
    const { javascript } = makeSut().sut;
    const mockedJson = jest.mocked(javascript, true);

    const objectReturn = {
      main: '',

      scripts: {},

      dependencies: {},

      devDependencies: {},
    };

    mockedJson.mockReturnValue(objectReturn);

    expect(javascript()).toEqual(objectReturn);
  });

  test('Should return an object with the correct keys in method typescript', () => {
    const { typescript } = makeSut().sut;
    const mockedJson = jest.mocked(typescript, true);

    const objectReturn = {
      main: '',

      scripts: {},

      dependencies: {},

      devDependencies: {},
    };

    mockedJson.mockReturnValue(objectReturn);

    expect(typescript()).toEqual(objectReturn);
  });
});
