import { Json } from './json';

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

    expect(javascript()).toHaveProperty('main');
    expect(javascript()).toHaveProperty('scripts');
    expect(javascript()).toHaveProperty('dependencies');
    expect(javascript()).toHaveProperty('devDependencies');
  });

  test('Should return an object with the correct keys in method typescript', () => {
    const { typescript } = makeSut().sut;

    expect(typescript()).toHaveProperty('main');
    expect(typescript()).toHaveProperty('scripts');
    expect(typescript()).toHaveProperty('dependencies');
    expect(typescript()).toHaveProperty('devDependencies');
  });
});
