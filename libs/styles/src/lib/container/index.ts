import { getPaddingStyling } from "../common/padding";
import { getStackStyling } from "../common/stack";

export function getContainerStyles(props) {
  return `
    ${getPaddingStyling(props)}
    ${getStackStyling(props)}
  `;
}
