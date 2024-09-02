"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_autoheight_webview_1 = __importDefault(require("react-native-autoheight-webview"));
const MathView = ({ style = {}, textSize = 16, content, textColor = "#000" }) => {
    const [webViewHeight, setWebViewHeight] = (0, react_1.useState)(1);
    const htmlContent = (0, react_1.useMemo)(() => `
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
    return (<react_native_autoheight_webview_1.default style={[{ width: '100%', height: webViewHeight > 150 ? webViewHeight : 150 }, style]} onSizeUpdated={size => setWebViewHeight(size.height)} source={{ html: htmlContent }} scalesPageToFit={false} viewportContent={'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'} scrollEnabled={false}/>);
};
exports.default = MathView;
//# sourceMappingURL=MathView.js.map