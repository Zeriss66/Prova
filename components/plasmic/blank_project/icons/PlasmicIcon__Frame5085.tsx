// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame5085IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame5085Icon(props: Frame5085IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 48"}
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
          "M11.502 22.197v.008a10.67 10.67 0 001.214 5.123 5.18 5.18 0 01.578 2.793l-.321 4.226 5.339-1.265a5.181 5.181 0 012.138-.05 11.2 11.2 0 002.002.187h.002c6.054.024 10.995-4.861 11.046-10.765a10.739 10.739 0 00-.814-4.194 10.851 10.851 0 00-2.395-3.566 11.011 11.011 0 00-3.614-2.38 11.124 11.124 0 00-4.273-.814c-5.97.051-10.816 4.875-10.902 10.697zm10.936 15.022c8.219.033 14.992-6.589 15.061-14.73a14.737 14.737 0 00-1.116-5.756 14.852 14.852 0 00-3.277-4.88 15.012 15.012 0 00-4.926-3.246A15.126 15.126 0 0022.37 7.5c-8.109.068-14.75 6.608-14.868 14.637a14.67 14.67 0 001.669 7.043c.102.196.151.416.135.637l-.618 8.132a1.136 1.136 0 001.395 1.192l9.15-2.168c.16-.037.327-.04.488-.01a15.2 15.2 0 002.717.255z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame5085Icon;
/* prettier-ignore-end */
