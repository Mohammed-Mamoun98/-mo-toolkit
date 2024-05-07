# @mo-toolkit/hooks

### Hooks Provided by @mo-toolkit/hooks

This package provides the following custom React hooks:

- **usePromise**: A hook for handling promises with loading and error states.
- **useDebounce**: A hook for debouncing a value.

##

You can use these hooks to simplify common tasks in your React applications.

## Installation

You can install the package via npm:

```bash
npm install @mo-toolkit/hooks
```

or via yarn:

```bash
yarn add @mo-toolkit/hooks
```

# Usage

### usePromise

```typescript
// Your TypeScript code here
import { usePromise } from "@mo-toolkit/hooks";

// Usage example
const [fetchData, data, isLoading, error, updateData, status, resetData] = usePromise(
  async () => { // any method that returns a promise
    // Your async function here
  },
  // Base configuration options (optional)
    initReq: true, // Make an initial request
    defaultRes: null, // Default response value
    showError: true, // Show error messages
    cachedResponse: false, // Cache response (default is resetting data at each call)
);
```

#### Parameters

- **promiseFunction**: An async function that returns a Promise.
- **baseConfig**: An optional object containing base configuration options for the hook.

#### Return Values

The usePromise hook returns an array containing the following elements:

- **fetchData**: A function that triggers the promise execution.
- **data**: An optional object containing base configuration options for the hook.

- **isLoading**: A boolean indicating whether the promise is currently loading.
- **error**: The error message from the rejected promise.

- **updateData**: A function to manually updates the data.
- **status**: The status of the promise (success, idle, or error).

- **resetData**: A function to reset the hook state.

##

### useDebounce

```typescript
import React, { useState } from "react";
import { useDebounce } from "@mo-toolkit/hooks";

const MyComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Use the debounced value for API requests or other actions
  useEffect(() => {
    // Perform an API request using the debounced search term
    // Example: fetchResults(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

export default MyComponent;
```

#### Parameters

- **value**: The value to debounce.
- **delay**: The delay (in milliseconds) before the value is updated.

#### Return Values

The useDebounce hook returns the debounced value, which is updated after the specified delay has passed.