// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame5080IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame5080Icon(props: Frame5080IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
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
          "M32.99 24.81v6.519c0 1.123-.535 1.652-1.668 1.652l-8.751.009c-.856 0-1.467-.611-1.468-1.472 0-2.229.013-4.458-.004-6.687-.014-1.978-1.725-3.39-3.673-3.06-1.463.247-2.55 1.532-2.56 3.066-.011 2.184-.031 4.368.01 6.551.019.978-.688 1.624-1.656 1.612-2.849-.035-5.698-.016-8.548-.019-1.117 0-1.667-.543-1.667-1.661 0-4.368-.002-8.737-.004-13.106a1.81 1.81 0 01.56-1.362A8733.88 8733.88 0 0016.823 3.58c.428-.43.908-.71 1.512-.519.307.106.585.28.814.511 4.357 4.346 8.694 8.708 13.06 13.042.559.556.805 1.13.79 1.915-.036 2.093-.01 4.187-.01 6.28zm-9.064 5.32h6.263v-.416c0-3.587.002-7.174.006-10.76a.796.796 0 00-.262-.62c-3.89-3.883-7.776-7.77-11.658-11.66-.085-.085-.175-.165-.271-.255-.068.062-.12.105-.167.153A13187.83 13187.83 0 006.019 18.408a.69.69 0 00-.175.44c-.01 3.655-.012 7.31-.008 10.964v.32h6.224v-.416c0-1.561-.032-3.123.014-4.685.02-.703.092-1.437.319-2.096 1.13-3.286 4.642-4.898 7.852-3.565 2.222.924 3.49 2.666 3.636 5.084.105 1.748.038 3.506.047 5.26-.002.134-.002.266-.002.417z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame5080Icon;
/* prettier-ignore-end */
