import * as tokens from '@tokens';
import { Sizing } from '@types';

export function calculateSize(size: Sizing = 'none') {
    switch (size) {
        case 'none':
            return tokens.spacingNone;
        case 'small':
            return tokens.spacingSmall;
        case 'medium':
            return tokens.spacingMedium;
        case 'large':
            return tokens.spacingLarge;
        case 'huge':
            return tokens.spacingHuge;
        default:
            throw new Error(`Unknown size [${size}] used.`)
    }
}