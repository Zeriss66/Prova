// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type KeyboardArrowDown3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KeyboardArrowDown3Icon(props: KeyboardArrowDown3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.754 11.429L16 16.726l5.246-5.297 1.611 1.63L16 20l-6.857-6.94 1.611-1.631z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default KeyboardArrowDown3Icon;
/* prettier-ignore-end */
