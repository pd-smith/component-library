import { calculateSize } from "../utils/sizing";

export function getStackStyling(props) {
    return `margin-bottom: ${calculateSize(props.stack)};`;
}