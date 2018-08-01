# has-did-method

Helper module for checking the presence of methods within a DID URI.

## Installation

```sh
$ npm install has-did-method
```

## Example Usage

```js
const hasDIDMethod = require('has-did-method')
let exists = hasDIDMethod('did:ara:1234') // returns true
exists = hasDIDMethod('1234') // returns false
```

## Tests

```sh
$ npm run test
```

## See Also

* [Decentralized Identity Spec](https://github.com/w3c-ccg/did-spec)
* [did-uri](https://github.com/AraBlocks/did-uri)

## License

MIT