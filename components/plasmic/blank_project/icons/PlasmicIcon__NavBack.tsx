// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavBackIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavBackIcon(props: NavBackIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1080 129"}
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
          "M368 0H0v128.001h1080V0H534c-13.255 0-24 10.745-24 24 0 28-22 59-59 59s-59-31-59-59c0-13.255-10.745-24-24-24z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NavBackIcon;
/* prettier-ignore-end */
