// types/index.d.ts

import { ViewStyle } from 'react-native';

export interface MathViewProps {
    /**
     * Define custom style
     */
    style?: ViewStyle;

    /**
     * Text size
     */
    textSize: number;

    /**
     * KateX content
     */
    content: string;

    /**
     * Text color
     */
    textColor: string;
}
