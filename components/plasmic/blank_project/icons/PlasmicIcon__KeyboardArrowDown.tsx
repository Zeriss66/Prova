// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type KeyboardArrowDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KeyboardArrowDownIcon(props: KeyboardArrowDownIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 56"}
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
        d={"M18.82 20L28 29.271 37.18 20 40 22.854 28 35 16 22.854 18.82 20z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default KeyboardArrowDownIcon;
/* prettier-ignore-end */
