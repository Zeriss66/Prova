// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AntDesignquestionCircleFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function AntDesignquestionCircleFilledIcon(
  props: AntDesignquestionCircleFilledIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 46"}
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
          "M12 12.5C6.202 12.5 1.5 17.202 1.5 23S6.202 33.5 12 33.5 22.5 28.798 22.5 23 17.798 12.5 12 12.5zm0 16.594a.937.937 0 110-1.875.937.937 0 010 1.875zm1.474-5.145A1.133 1.133 0 0012.75 25v.532a.188.188 0 01-.188.188h-1.124a.188.188 0 01-.188-.188v-.504a2.62 2.62 0 011.688-2.48c.796-.306 1.312-.974 1.312-1.703 0-1.034-1.01-1.875-2.25-1.875s-2.25.841-2.25 1.875v.178a.188.188 0 01-.188.187H8.438a.188.188 0 01-.188-.187v-.178c0-.921.403-1.782 1.134-2.421.704-.617 1.632-.954 2.616-.954.984 0 1.912.34 2.616.954.73.64 1.134 1.5 1.134 2.42 0 1.355-.893 2.574-2.276 3.106z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesignquestionCircleFilledIcon;
/* prettier-ignore-end */
