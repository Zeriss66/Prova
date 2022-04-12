// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame5087IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame5087Icon(props: Frame5087IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 27"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M21.333 0C22.806 0 24 1.148 24 2.563v21.874C24 25.852 22.806 27 21.333 27c-1.473 0-2.666-1.148-2.666-2.563V2.563C18.666 1.148 19.86 0 21.332 0zM12 9.45c1.473 0 2.667 1.156 2.667 2.581v12.388c0 1.426-1.194 2.581-2.666 2.581-1.473 0-2.667-1.155-2.667-2.58V12.03c0-1.425 1.194-2.58 2.667-2.58zm-9.333 10.8a2.666 2.666 0 012.666 2.665v1.42A2.666 2.666 0 012.667 27 2.666 2.666 0 010 24.335v-1.42a2.666 2.666 0 012.667-2.665z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame5087Icon;
/* prettier-ignore-end */
