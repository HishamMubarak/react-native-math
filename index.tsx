import React, { useState, useMemo } from 'react';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { MathViewProps } from './types/index.d'; // Adjust this path if necessary

const MathView: React.FC<MathViewProps> = ({
    style = {},
    textSize = 16,
    content = "",
    textColor = "#000"
}) => {
    const [webViewHeight, setWebViewHeight] = useState(1);

    const htmlContent = useMemo(() => `
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+" crossorigin="anonymous">
            <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" integrity="sha384-7zkQWkzuo3B5mTepMUcHkMB5jZaolc2xDwL6VFqjFALcbeS9Ggm/Yr2r3Dy4lfFg" crossorigin="anonymous"></script>
            <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" integrity="sha384-43gviWU0YVjaDtb/GhzOouOXtZMP/7XUzwPTstBeZFe/+rCMvRwr4yROQP43s0Xk" crossorigin="anonymous"
                onload="renderMathInElement(document.body, { 
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false },
                    { left: '\\[', right: '\\]', display: true },
                    { left: '\\(', right: '\\)', display: false }
                ],
                ignoredTags: [
                    'script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a'
                ]
                });"></script>
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
            style={[style, { width: '100%', height: webViewHeight > 150 ? webViewHeight : 150 }]}
            onSizeUpdated={size => setWebViewHeight(size.height)}
            source={{ html: htmlContent }}
            scalesPageToFit={false}
            viewportContent={'width=device-width, user-scalable=no'}
            scrollEnabled={false}
        />
    );
};

export default MathView;
