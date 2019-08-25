import { FlattenSimpleInterpolation } from "styled-components";

export function styleWhen(
  condition: boolean,
  style: FlattenSimpleInterpolation
) {
  return condition ? style : "";
}
