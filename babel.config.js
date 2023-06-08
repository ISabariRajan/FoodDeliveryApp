module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // [
    //   require.resolve("react-native-reanimated/plugin")
    // ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ["./src"],
      }
    ],
  ]
};
