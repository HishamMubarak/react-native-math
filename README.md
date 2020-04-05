
# react-native-math


##### Warning: This package does not available for iOS as of now

This package currently does not support math for iOS. Feel free to send a pull request.
Katex-iOS native package: https://github.com/ianarawjo/KaTeX-iOS

## Installation

`$ npm install react-native-math --save`


## Usage
```jsx

import React from 'react'
import { View } from 'react-native'
import RNMath from 'react-native-math';

class MathItem extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, margin: 20 }}>
        <RNMath
          mathText={`Dissolve this $x=\\frac{1+y}{1+2z^2}$ using lorem ipsum dolor sit amet`}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />

        <RNMath
          mathText={`$x=\\frac{1+y}{1+2z^2}$`}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />

        <RNMath
          mathText={`sum of ratios =4+3=7 $=\\frac{4}{7}\\times560=320$`}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />

        <RNMath
          mathText={` <p>If <span class="latexEle" data-latex="x:35::48:60">$x:35::48:60$</span><span></p>`}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />
        
      </View>
    )
  }
}
```

Expected Output https://i.imgur.com/wwpvZKE.png

#### Supported Props

| Prop           |     Default     |   Type   | Description                                                                                                 |
| :------------- | :-------------: | :------: | :---------------------------------------------------------------------------------------------------------- |
| style     |      -       |  `object`/`arrat`  | Default react nativ styles |
| mathText           |      -       |  `string`  | Katex text (Make sure to escape \\ using two \\ slashes )|



### Manual installation

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
	  
