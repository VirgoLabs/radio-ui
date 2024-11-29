# Expo React Native UI Template

This is a React Native UI template built with Expo. It provides a simple starting point for building mobile apps using Expo and React Native.

## Features

- Basic UI structure
- Responsive layout
- Expo development environment setup
- Simple components to get started

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A code editor, e.g., [VS Code](https://code.visualstudio.com/)
- [Android Studio](https://developer.android.com/studio) or [Xcode](https://developer.apple.com/xcode/) for iOS development (optional, but needed for running on real devices)

## Installation

Follow these steps to get your template up and running:

### 1. Start with Expo Create App

To create a new project, run the following command:

```bash
npx create-expo-app -t https://github.com/VirgoLabs/ui-template
```

### 2. Install Dependencies

Navigate to the project directory and install the dependencies:

```bash
cd your-repository-name
npm install
```

Alternatively, you can use `yarn` or `bun` if you're using as your package manager:

```bash
cd your-repository-name
yarn install
```

```bash
cd your-repository-name
bun install
```

### 3. Start the Expo Project

Run the following command to start the Expo development server:

```bash
npx expo start
```

or, if using Yarn or Bun:

```bash
yarn expo start
```

```bash
bunx expo start
```

This will open the Expo Developer Tools in your browser. From there, you can run the app on an iOS/Android simulator or on a physical device via the Expo Go app.

### 4. Running on a Physical Device

To run the project on your physical device:

1. Install the [Expo Go app](https://docs.expo.dev/get-started/installation/#2-install-the-expo-go-app) on your phone from the App Store (iOS) or Google Play Store (Android).
2. Scan the QR code that appears in the Expo Developer Tools in your browser.
3. The app will open on your device.

### 5. Run on an Emulator

If you have an Android or iOS simulator set up, you can run the app directly from the command line.

For iOS (requires macOS and Xcode):

```bash
npm run ios
```

For Android:

```bash
npm run android
```

## Customizing the Template

This template is designed to be easily customizable:

- Modify the `_layout.tsx` file to update the main layout or shared components across screens.
- Add new screens or components inside the app folder by creating new `.tsx` files. Each file becomes a new route automatically.
- Edit the stylesheet directory for global styles and import them into your components as needed.

## Troubleshooting

If you encounter any issues during installation or while running the app:

- Ensure that you have a stable internet connection as dependencies need to be downloaded.
- Make sure that you have the latest versions of Node.js, npm, and Expo CLI.
- If you face any issues running on a simulator or device, try restarting the Expo server or rebuilding the app.

## Contributing

If you'd like to contribute to this template, feel free to submit a pull request. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
