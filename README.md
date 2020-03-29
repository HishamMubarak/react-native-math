
# react-native-math

## Getting started

`$ npm install react-native-math --save`

### Mostly automatic installation

`$ react-native link react-native-math`

### Manual installation


#### iOS

This package currently does not support math for iOS. Feel free to send a pull request

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNMathPackage;` to the imports at the top of the file
  - Add `new RNMathPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-math'
  	project(':react-native-math').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-math/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-math')
  	```
	  
## Usage
```javascript
import RNMath from 'react-native-math';

// TODO: What to do with the module?