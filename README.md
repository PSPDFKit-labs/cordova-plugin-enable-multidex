# Multidex for Cordova

**This repo is forked from the [original](https://github.com/adriano-di-giovanni/cordova-plugin-enable-multidex) in order to roll in changes to accommodate Cordova 9.x and Android 8.x changes.  See [This PR](https://github.com/PSPDFKit-labs/cordova-plugin-enable-multidex/commit/b161e9473ba58b663ac5888acb3de1983c77ce40) for a list of changes.**

Enable Multidex for Cordova Android apps with over 64K methods.

When your app and the libraries it references exceed 65,536 methods, you encounter a build error that indicates your app has reached the limit of the Android build architecture.

Move past this limitation by enabling an app configuration known as multidex, which allows your app to build and read multiple DEX files.

More information can be found at https://developer.android.com/studio/build/multidex.html

## Installation

As this is a fork of an original repo, it needs to be installed using the git+http method.

```bash
cordova plugin add git+https://github.com/PSPDFKit-labs/cordova-plugin-enable-multidex.git
```

## Supported platforms

* Android

## License

This project is [MIT-licensed](https://github.com/adriano-di-giovanni/cordova-plugin-enable-multidex/blob/master/LICENSE).
