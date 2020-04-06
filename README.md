
# react-native-math

##### Why this package?

There are a few other packages out there to render math equations in React Native Math. The only reason why I chose to create this package is because I could'nt find any package that supports line break inside the view, most of them reduced the width to an unreadable size when equation is too long or when there is text along with the equation. Also I wanted a way to use Math the same way we use any other components, instead of managing a WebView

PR's and issues are always welcome :)

##### Warning: This package does not available for iOS as of now

This package currently does not support math for iOS. Feel free to send a pull request.
Katex-iOS native package: https://github.com/ianarawjo/KaTeX-iOS

## Installation

`$ npm install react-native-math --save`


## Usage
```jsx

import React from 'react'
import { View } from 'react-native'
import MathText from 'react-native-math';

class MathItem extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, margin: 20 }}>
        <MathText
          value={`Dissolve this $x=\\frac{1+y}{1+2z^2}$ using lorem ipsum dolor sit amet`}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          textSize={25}
          textColor={"#f2f2f2}
        />

        <MathText
          value={`$x=\\frac{1+y}{1+2z^2}$`}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          textSize={15}
          textColor={"#ff0000}
        />

        <MathText
          value={`sum of ratios =4+3=7 $=\\frac{4}{7}\\times560=320$`}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          textSize={15}
          textColor={"#ff0000}
        />

        <MathText
          value={` <p>If <span class="latexEle" data-latex="x:35::48:60">$x:35::48:60$</span><span></p>`}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          textSize={15}
          textColor={"#ff0000}
        />
        
      </View>
    )
  }
}
```

Expected Output https://i.imgur.com/wwpvZKE.png

### Supported Props

| Prop           |     Default     |   Type   | Description                                                                                                 |
| :------------- | :-------------: | :------: | :---------------------------------------------------------------------------------------------------------- |
| style     |      {}       |  `object`/`array`  | Default react native styles (Pass background color here) |
| value           |      ""       |  `string`  | Katex text (Make sure to escape \\ using two \\ slashes )|
| textSize           |      20       |  `number`  | Font size of the math equation Ex:10 |
| textColor           |      `#000000`       |  `hex color`  | Pass 6 character hex color value |


### Manual installation

Only required for React Native versions less than 0.60

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
	  
### Known issues

#### 1. The flex requirement
Native UI modules requires to have the style of the native view and all it's parents to have a style flex property of 1 or greater. The workaround is pretty simple, add flex:1 or any other value to flex property to all the parent views of the math component.

#### 2. The scroll issue
When you have set a flex value to the math component and the text you passed to it exceeds the height of your flex size, the content out of margin will be not visible. To go around this issue, add math component inside a ScrollView, which make the math text scrollable within the available flex area. 
