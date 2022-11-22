export const editorconfig = `
  root = true

  [*]
  indent_style = space
  indent_size = 2
  end_of_line = crlf # defina como lf , cr ou crlf para controlar como as quebras de linha são representadas
  charset = utf-8
  trim_trailing_whitespace = true # defina como true para remover quaisquer caracteres de espaço em branco
  insert_final_newline = true  # defina como true para garantir que o arquivo termine com uma nova linha ao salvar
`.toString().replaceAll('  ', '').trim();

export const prettierrc = `
  module.exports = {
    \tsemi: true,
    \ttabWidth: 2,
    \tsingleQuote: true,
    \tprintWidth: 80,
    \ttrailingComma: 'all'
  }
`.toString().replaceAll('  ', '').trim();

export const vcCodeSettings = {
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": true
  }
}

export const readme = `
  # My project
  My project is a Nodejs ...

  ## Installation
  ${'```' + 'npm install project' + '```'}

  ## Usage
  ${'```' + 'npm i ...' + '```'}

  ## Contributing
  neves...

  ## License
  [MIT]...
`.toString().replaceAll('  ', '').trim();
