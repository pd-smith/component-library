import { calculatePadding } from "../utils/padding";

export function getPaddingStyling(props) {
    return `padding: ${calculatePadding(props)};`;
}