# react-native-math

##### Why this package?

There are a few other packages out there to render math equations in React Native Math. The only reason why I chose to create this package is because I could'nt find any package that supports line break inside the view, most of them reduced the width to an unreadable size when equation is too long or when there is text along with the equation. Also I wanted a way to use Math the same way we use any other components, instead of managing a WebView

PR's and issues are always welcome :)

## Installation

`$ npm install react-native-math react-native-webview`

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
          content={`
            $$E = mc^2$$
            $2^{1+2}$
            Here is an inline equation: $a^2 + b^2 = c^2$
            <p>Additional HTML content can go here.</p>
          `}
          textSize={20}
          textColor={"#333"}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />

        <MathText
          content={`Dissolve this $x=\\frac{1+y}{1+2z^2}$ using lorem ipsum dolor sit amet`}
          textSize={20}
          textColor={"#333"}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />

        <MathText
          content={`sum of ratios =4+3=7 $=\\frac{4}{7}\\times560=320$`}
          textSize={20}
          textColor={"#333"}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />

        <MathText
          content={`$x=\\frac{1+y}{1+2z^2}$`}
          textSize={20}
          textColor={"#333"}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />
      </View>
    )
  }
}
```

Expected Output https://i.imgur.com/wwpvZKE.png

### Supported Props

| Prop      |  Default  |       Type       | Description                                               |
| :-------- | :-------: | :--------------: | :-------------------------------------------------------- |
| style     |    {}     | `object`/`array` | Default react native styles (Pass background color here)  |
| content     |    ""     |     `string`     | Katex text (Make sure to escape \\ using two \\ slashes ) |
| textSize  |    20     |     `number`     | Font size of the math equation Ex:10                      |
| textColor | `#000000` |   `hex color`    | Pass 6 character hex color value                          |
