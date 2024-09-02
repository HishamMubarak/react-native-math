import { ViewStyle } from 'react-native';
import React from 'react';

export interface MathViewProps {
    /**
     * Define custom style
     */
    style?: ViewStyle;

    /**
     * Text size
     */
    textSize?: number;

    /**
     * KaTeX content
     */
    content: string;

    /**
     * Text color
     */
    textColor?: string;
}

declare const MathView: React.FC<MathViewProps>;

export default MathView;