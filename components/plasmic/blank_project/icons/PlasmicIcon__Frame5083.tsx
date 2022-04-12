// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame5083IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame5083Icon(props: Frame5083IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
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
          "M35.664 39H12.33a3.333 3.333 0 01-3.333-3.333V12.333A3.333 3.333 0 0112.33 9h23.334a3.333 3.333 0 013.333 3.333v23.334A3.333 3.333 0 0135.664 39zM12.33 12.333v23.334h23.334V12.333H12.33zm21.667 20h-20l5-6.666 1.667 1.666 5-6.666 8.333 11.666zm-15.833-10a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame5083Icon;
/* prettier-ignore-end */
