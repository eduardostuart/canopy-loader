# [Canopy]() PEG loader

> [Canopy](http://canopy.jcoglan.com/) is a [PEG](https://en.wikipedia.org/wiki/) parser compiler. It lets you describe the grammar of the
> language you’re trying to parse using a simple, terse syntax, and it
> generates a parser for the language from this definition.

## Usage

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.peg$/,
        loader: 'canopy-loader'
      }
    ]
  }
}
```

## License

[MIT](https://github.com/eduardostuart/peg-loader/LICENSE)
