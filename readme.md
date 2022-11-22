# Node CLI

**Antes de mais nada, o que é CLI ?**

A sigla em inglês command-line interface (CLI), significa Interface de Linha de Comando (ILC). Geralmente, ela representa um programa funcionando através de linhas de comando, que aceita entrada de texto para executar funções do sistema operacional.

[mais informações . . .](https://pt.wikipedia.org/wiki/Interface_de_linha_de_comandos)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Node-cli tem como grande objetivo criar um projeto base feito em NodeJs com configurações predefinidas mais atuais, que possibilita uma rápida agilidade na hora de iniciar um projeto sem se preocupar com as configurações iniciais.

Essa é uma versão melhorada desse outro projeto [Cli-Nodejs](https://github.com/FelipeNevess/Cli-Nodejs)

## Atualmente ele está publicado no [Npm](https://www.npmjs.com/package/node-cli-v2?activeTab=readme)
#### Para executar ele pelo npm, rode: **npx node-cli-v2**

## Instalação

### Instalando dependências

#### Use o **yarn** ou **npm** para instalar as dependências.

```
npm install
```

```
yarn
```

## Como usar o app?

### No _script_ do package.json tem os seguintes comandos:

```python
"scripts": {
  "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn app/run.ts",
  "test": "jest --passWithNoTests --silent --runInBand",
  "test:verbose": "jest --runInBand",
  "test:unit": "npm test -- --watch -c jest-unit-config.js",
  "local": "sudo npm i -g || npm i -g && node-app",
  "refresh": "rm -rf ./node_modules ./package-lock.json && npm install",
  "build": "tsc -p ."
}

# Essas etapas vão de acordo com a necessidade de uso

# Inicia o app normalmente
yarn dev #ou
npm run dev

# Cria um executável NPM em sua maquina local

yarn build #ou
npm run build

yarn local #ou
npm run local

# Reinstala as dependências
yarn refresh #ou
npm run refresh
```

## Contributing

## License

[MIT](https://choosealicense.com/licenses/mit/)
