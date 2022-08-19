import { Regex } from './regex';
import { UseGit } from './useGit';
import { UseTypescript } from './useTypescript';

///////////////////////////////////////////
// Validação regex
const regex = new Regex();

///////////////////////////////////////////
// adiciona o Git
const useGit = new UseGit(regex);

///////////////////////////////////////////
// adiciona o Typescript ou Javascript

const useTypescript = new UseTypescript(regex);

export { useGit, useTypescript };
