// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotificationsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NotificationsIcon(props: NotificationsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M39.764 37.275v.207l.146.146 2.667 2.667v.7H21.07v-.7l2.667-2.667.147-.146v-7.24c0-4.158 2.185-7.512 5.945-8.403l.384-.091v-1.353c0-.892.719-1.61 1.61-1.61.891 0 1.61.718 1.61 1.61v1.351l.384.091c3.747.891 5.946 4.26 5.946 8.404v7.033zM34.083 43.4a2.313 2.313 0 01-4.517 0h4.517z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default NotificationsIcon;
/* prettier-ignore-end */
