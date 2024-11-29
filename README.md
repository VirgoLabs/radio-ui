# Radio UI

This is a customizable Radio UI for React Native that can be used in any project built with Expo or React Native. It provides several styling options, supports icons, dynamic color theming based on light or dark mode, and enables vertical or horizontal layouts.

## Features

- Fully customizable radio buttons with support for icons.
- Dynamic theming with light and dark mode support.
- Customizable styles for labels, buttons, and containers.
- Supports vertical and horizontal orientations.
- Allows for active and inactive color customization.
- Optional error message display for validation.
- Disabled state for non-interactive radio buttons.

## Installation

To use this Radio Button component, ensure you have the following dependencies installed:

```bash
npm install react-native
npm install @expo/vector-icons
```

If you're using Expo, the `Ionicons` icon package is included by default. Otherwise, install it via:

```bash
npm install @expo/vector-icons
```

Copy the `Radio` component code and the `Colors.ts` file into your project.

Import the `Radio` component into your project:

```tsx
import Radio from "@/components/Radio"; // Adjust path as needed
```

## Usage

Here’s a basic usage example:

```tsx
import React, { useState } from "react";
import { View } from "react-native";
import Radio, { optionType } from "@/components/Radio";

const App = () => {
  const [selected, setSelected] = useState<optionType | null>(null);

  const options = [
    { id: 1, label: "Option 1", value: "option1" },
    { id: 2, label: "Option 2", value: "option2", color: "#4CAF50" },
    { id: 3, label: "Option 3", value: "option3", icon: "checkmark-circle" },
  ];

  const handleValueChange = (value: optionType, index: number) => {
    setSelected(value);
    console.log(`Selected Option: ${value.label}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Radio
        options={options}
        defaultValueIndex={0}
        onValueChange={handleValueChange}
        orientation="vertical"
        activeColor="blue"
        inactiveColor="gray"
        size={24}
      />
    </View>
  );
};

export default App;
```

## Props

Here’s a detailed list of the props supported by the `Radio` component:

| Prop                | Type                                         | Default Value  | Description                                                        |
| ------------------- | -------------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `options`           | `optionType[]`                              | Required       | Array of options with `id`, `label`, and `value`.                  |
| `defaultValueIndex` | `number`                                     | `0`            | Index of the default selected option.                              |
| `onValueChange`     | `(value: optionType, index: number) => void` | Required       | Callback invoked when a radio button is selected.                  |
| `disabled`          | `boolean`                                   | `false`        | If `true`, disables all radio buttons.                             |
| `labelStyle`        | `StyleProp<TextStyle>`                       | None           | Custom styles for the label text.                                  |
| `radioButtonStyle`  | `StyleProp<ViewStyle>`                       | None           | Custom styles for the radio button.                                |
| `itemContainerStyle`| `StyleProp<ViewStyle>`                       | None           | Custom styles for the container of each radio button and label.    |
| `orientation`       | `"horizontal" \| "vertical"`                 | `"vertical"`   | Orientation of the radio button group.                             |
| `activeColor`       | `string`                                     | Theme color    | Color of the selected radio button.                                |
| `inactiveColor`     | `string`                                     | Theme color    | Color of the unselected radio buttons.                             |
| `size`              | `number`                                     | `24`           | Size of the radio button.                                          |
| `error`             | `string`                                     | None           | Error message to display below the radio button group.             |

## Example with All Props

```tsx
<Radio
  options={[
    { id: 1, label: "Option A", value: "A" },
    { id: 2, label: "Option B", value: "B", icon: "star", color: "green" },
  ]}
  defaultValueIndex={0}
  onValueChange={(value, index) => console.log(`Selected: ${value.label}`)}
  disabled={false}
  labelStyle={{ fontSize: 18, color: "#333" }}
  radioButtonStyle={{ borderWidth: 2, borderColor: "#555" }}
  itemContainerStyle={{ marginBottom: 16 }}
  orientation="horizontal"
  activeColor="#4CAF50"
  inactiveColor="#BDBDBD"
  size={28}
  error="Please select an option"
/>
```

## Notes on Styling

- **Colors**: Customize active and inactive colors using the `activeColor` and `inactiveColor` props.
- **Orientation**: Use the `orientation` prop to switch between `vertical` and `horizontal` layouts.
- **Icons**: Add an icon to any option using the `icon` property in the `options` array.

### Example Options Array

```ts
const options = [
  { id: 1, label: "Option A", value: "A" },
  { id: 2, label: "Option B", value: "B", icon: "checkmark-circle" },
  { id: 3, label: "Option C", value: "C", color: "red" },
];
```

### Accessibility

Provide meaningful labels for better user experience. Use the `disabled` prop to indicate non-interactive options.

## Contributing

If you'd like to contribute to this Radio Button component, feel free to fork this repository, make changes, and submit a pull request. Any improvements or suggestions are welcome!

## License

This Radio Button component is licensed under the MIT License. See [LICENSE](./LICENSE) for more details.