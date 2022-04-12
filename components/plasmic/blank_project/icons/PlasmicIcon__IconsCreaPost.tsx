// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsCreaPostIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsCreaPostIcon(props: IconsCreaPostIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M12 18.857a6.857 6.857 0 110-13.714 6.857 6.857 0 010 13.714zM12 6.39a5.61 5.61 0 100 11.22 5.61 5.61 0 000-11.22z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.117 11.377h-2.494V8.883h-1.247v2.494H8.883v1.246h2.493v2.494h1.247v-2.494h2.494v-1.246z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsCreaPostIcon;
/* prettier-ignore-end */
