import React, { useState, useMemo } from 'react';
import { ViewStyle } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';

interface MathViewProps {
    style?: ViewStyle;
    textSize?: number;
    content: string;
    textColor?: string;
}

const MathView: React.FC<MathViewProps> = ({
    style = {},
    textSize = 16,
    content,
    textColor = "#000"
}) => {
    const [webViewHeight, setWebViewHeight] = useState(1);

    const htmlContent = useMemo(() => `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" integrity="sha384-7zkQWkzuo3B5mTepMUcHkMB5jZaolc2xDwL6VFqjFALcbeS9Ggm/Yr2r3Dy4lfFg" crossorigin="anonymous"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" integrity="sha384-43gviWU0YVjaDtb/GhzOouOXtZMP/7XUzwPTstBeZFe/+rCMvRwr4yROQP43s0Xk" crossorigin="anonymous"
    onload="renderMathInElement(document.body, { 
        delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\\\[', right: '\\\\]', display: true },
            { left: '\\\\(', right: '\\\\)', display: false }
                ],
                ignoredTags: [
                    'script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a'
                ]
                });"></script>
                <style>
                body { margin: 0; padding: 0; }
                </style>
                </head>
                <body>
                <div style="font-size: ${textSize}px; color: ${textColor};">
                ${content}
                </div>
                </body>
                </html>
                `, [content, textSize, textColor]);

    return (
        <AutoHeightWebView
            style={[{ width: '100%', height: webViewHeight > 150 ? webViewHeight : 150 }, style]}
            onSizeUpdated={size => setWebViewHeight(size.height)}
            source={{ html: htmlContent }}
            scalesPageToFit={false}
            viewportContent={'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}
            scrollEnabled={false}
        />
    );
};

export default MathView;
