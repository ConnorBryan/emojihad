import { FlattenSimpleInterpolation } from "styled-components";

export function styleWhen(
  condition: boolean,
  style: FlattenSimpleInterpolation
) {
  return condition ? style : "";
}

export function branchStyles(
  condition: boolean,
  {
    truthy,
    falsy
  }: {
    truthy: FlattenSimpleInterpolation;
    falsy: FlattenSimpleInterpolation;
  }
) {
  return condition ? truthy : falsy;
}
