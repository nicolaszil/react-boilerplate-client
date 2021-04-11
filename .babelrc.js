module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: "> 0.5%, last 2 versions, Firefox ESR, not dead",
          useBuiltIns: "usage",
          corejs: 3,
        },
      ],
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      [
        "babel-plugin-transform-imports",
        {
          "@material-ui/core": {
            transform: (member) =>
              ["makeStyles", "createMuiTheme", "useTheme"].includes(member)
                ? `@material-ui/core/esm/styles/${member}`
                : `@material-ui/core/esm/${member}`,
            preventFullImport: true,
          },
          "@material-ui/icons": {
            transform: "@material-ui/icons/esm/${member}",
            preventFullImport: true,
          },
          "lodash-es": {
            transform: "lodash-es/${member}",
            preventFullImport: true,
          },
        },
      ],
    ],
  };
};
