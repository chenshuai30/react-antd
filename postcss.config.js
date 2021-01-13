module.exports = {
  "plugins": {
    "postcss-preset-env": {
      stage: 3,
      browsers: [
        "android >= 3.0",
        "ios >= 8",
        "ie >= 9",
        "Safari >= 6",
        "last 5 versions",
        "last 10 Chrome versions",
        "last 8 Firefox versions"
      ]
    }
  }
}