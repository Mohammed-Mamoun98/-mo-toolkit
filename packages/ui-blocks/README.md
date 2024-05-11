# Mo Toolkit UI Blocks

`@mo-toolkit/ui-blocks` is a collection of UI blocks and components designed to accelerate frontend development.

## Installation

You can install the package via npm:

```bash
npm install @mo-toolkit/ui-blocks
```

or via yarn:

```bash
yarn add @mo-toolkit/ui-blocks
```

- **Skeleton**: component provides a loading skeleton effect to indicate that content is being loaded asynchronously.
- **Tabs**: component provides a tabbed interface for displaying content.

##

# Usage

### Skeleton
a component provides a loading skeleton effect to indicate that content is being loaded asynchronously.

```typescript
import { Skeleton } from "@mo-toolkit/ui-blocks";

<Skeleton loading={gettingBalance} mockChildren={<div>1.3 BNB</div>}>
  // we're using mockChildren like this since we're expecting balance to look like this
  <span>{userBalance}</span>
</Skeleton>;
```

#### Props

The Skeleton component accepts the following props:

- **className?: string**: Additional class names for styling.
- **children: JSX.Element | JSX.Element[] | string**: The content to render when not loading.
- **mockChildren?: JSX.Element | JSX.Element[]**: Optional mock content so skeleton height match the expected content height.
- **loading: boolean**: Whether the component is in loading state or not.
- **style?: React.CSSProperties**: Additional styles to apply.

###

When loading is true, the Skeleton component will render the mockChildren or an empty skeleton container. When loading is false, the Skeleton component will render the children.

##

### Tabs
component provides a tabbed interface for displaying content.

```typescript
import { Tabs } from "@mo-toolkit/ui-blocks";

const tabs = [
  {
    id: "1",
    title: "First Tab",
  },
  {
    id: "2",
    title: "Second Tab",
  },
  {
    id: "3",
    title: "Third Tab",
  },
];

export default function App() {
  return (
    <div style={{ maxWidth: "50%", minHeight: "100vh" }}>
      <Tabs tabs={tabs}>
        <Tabs.Tab tab="1">
          <span>Content from 1</span>
        </Tabs.Tab>
        <Tabs.Tab tab="2">
          <span>Content from 2</span>
        </Tabs.Tab>
        <Tabs.Tab tab="3">
          <span>Content from 3</span>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
```

#### Props

The Tabs component accepts the following props:

- **children: JSX.Element | JSX.Element[]**: wraps child tabs content;
- **tabs: ISingleTab[]**: An array of tab objects .
- **initCurrentTab?: string**: ID of the initial tab to be selected (defaults to the first tab).
- **hideTabPicket?: boolean**: Whether to hide the tab picker.
- **setter?: (id: string) => void**: A function to be called when the current tab changes.
- **TabPicker?: typeof DefaultTabPicker**: Component to use for tab selection (defaults to DefaultTabPicker).
