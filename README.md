# PEG loader

"Parsing expression grammar" [PEG](https://en.wikipedia.org/wiki/Parsing_expression_grammar) loader for webpack

## Usage

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.peg$/,
        loader: 'peg-loader'
      }
    ]
  }
}
```

## License

[MIT](https://github.com/eduardostuart/peg-loader/LICENSE)
