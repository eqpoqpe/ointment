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
    storeAdapter: {
        getAdapter: (key) => sessionStorage.getItem(key),
        setAdapter: (key, value) => sessionStorage.setItem(key, value)
    }
});
customStorage.updateStorage('USER_TOKEN', 'xyz789');
const customToken = customStorage.fetchStorage('USER_TOKEN');
console.log(customToken); // 'xyz789'
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
