// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame5070IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame5070Icon(props: Frame5070IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 33"}
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
          "M16.5 33a16.5 16.5 0 110-33 16.5 16.5 0 010 33zm0-30a13.5 13.5 0 100 27 13.5 13.5 0 000-27z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M24 15h-6V9h-3v6H9v3h6v6h3v-6h6v-3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame5070Icon;
/* prettier-ignore-end */
