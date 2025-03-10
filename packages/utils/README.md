# @ointment/utils

## Installation

Install the package via npm:

```bash
npm install @ointment/utils
```

## Usage

### Storage

The storage utility offers functions to interface with localStorage as well as custom storage adapters.

#### Example

```typescript
import { fetchStorage, updateStorage, createStorage } from '@ointment/utils';

const constants = {
    USER_TOKEN: 'user_token'
};

// Using localStorage
updateStorage(constants, 'USER_TOKEN', 'abc123');
const token = fetchStorage(constants, 'USER_TOKEN');
console.log(token); // 'abc123'

// Using a custom adapter
const customStorage = createStorage(constants, {
    getAdapter: (key) => sessionStorage.getItem(key),
    setAdapter: (key, value) => sessionStorage.setItem(key, value)
});
customStorage.updateStorage('USER_TOKEN', 'xyz789');
const customToken = customStorage.fetchStorage('USER_TOKEN');
console.log(customToken); // 'xyz789'
```

### Maybe

The maybe utility safely applies a function to a value if it exists.

#### Example

```typescript
import { maybe } from '@ointment/utils';

const value = 'Hello, World!';
const result = maybe(value, (v) => v.toUpperCase());
console.log(result); // 'HELLO, WORLD!'

const nullResult = maybe(null, (v) => v.toUpperCase());
console.log(nullResult); // null
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
