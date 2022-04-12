// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame5081IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame5081Icon(props: Frame5081IconProps) {
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
          "M37.924 12.58a3.714 3.714 0 00-2.687-1.128h-2.624v-.968c0-.806-.664-1.484-1.454-1.484h-1.043c-.79 0-1.454.678-1.454 1.484v.968h-9.293v-.968c0-.806-.664-1.484-1.455-1.484h-1.043c-.79 0-1.454.678-1.454 1.484v.968h-2.592C10.707 11.452 9 13.194 9 15.355v19.742C9 37.258 10.707 39 12.825 39h17.29a4.011 4.011 0 002.814-1.194l4.9-5a4.096 4.096 0 001.17-2.87V15.387a3.884 3.884 0 00-1.075-2.806zM11.37 35.066V19.29h25.288v9.87h-4.552c-1.485 0-2.687 1.226-2.687 2.742v4.645H12.826c-.79 0-1.454-.677-1.454-1.483z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame5081Icon;
/* prettier-ignore-end */
