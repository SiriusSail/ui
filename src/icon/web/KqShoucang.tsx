/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const KqShoucang: FunctionComponent<Props> = ({
  size,
  color,
  style: _style,
  ...rest
}) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg
      viewBox="0 0 1024 1024"
      width={size + 'px'}
      height={size + 'px'}
      style={style}
      {...rest}
    >
      <path
        d="M764.764 965.591c-9.871 0-22.118-3.297-33.403-8.95L512.225 847.053 291.165 956.64c-23.04 12.698-52.675 10.363-73.831-5.16-21.648-16.467-32.932-44.217-28.222-70.083l45.63-235.623-172.606-161.77c-18.8-18.8-26.337-48.435-19.271-73.36 8.929-27.73 30.556-46.1 57.364-49.377l240.783-43.745L449.188 98.365c12.226-24.453 37.13-39.977 63.037-39.977 26.809 0 53.125 16.466 62.997 40.469l107.704 218.685 241.254 42.312c26.338 3.768 48.927 23.511 55.972 48.927a71.741 71.741 0 0 1-17.428 73.36L789.197 645.795l43.725 235.622A70.697 70.697 0 0 1 804.7 951.5c-10.322 8.93-24.904 14.09-39.936 14.09zM512.225 841.912l221.02 110.51c10.814 5.161 22.098 8.008 31.048 8.008a59.187 59.187 0 0 0 37.15-12.698c20.686-15.523 31.049-40.468 26.338-65.372l-44.216-238.448 0.942-0.942 174.96-164.127a66.806 66.806 0 0 0 16.466-68.69 63.734 63.734 0 0 0-52.203-45.63l-243.63-42.31-108.647-221.02c-9.4-22.098-33.853-37.622-58.777-37.622-24.453 0-47.493 14.582-58.798 37.622l-109.589 220.57-243.138 44.216c-25.395 3.297-45.63 20.213-54.088 46.08-6.595 23.51 0.471 51.261 17.88 68.669l175.41 163.205-0.47 1.393-45.61 237.035c-4.69 23.982 5.653 50.32 26.338 65.372a64.758 64.758 0 0 0 68.669 4.69l222.945-110.51z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M764.764 1005.773c-16.118 0-34.365-4.67-51.364-13.169L512.143 891.965 309.7 992.317a108.012 108.012 0 0 1-50.996 12.698 110.797 110.797 0 0 1-65.147-21.135l-0.573-0.43c-33.771-25.703-50.81-68.588-43.418-109.24l0.082-0.451 41.41-213.832L34.162 512.881l-0.45-0.45C4.627 483.327-6.964 439.09 4.177 399.707l0.43-1.372c13.476-41.84 47.677-71.168 89.457-76.78l219.873-39.936 99.307-201.195c18.883-37.806 57.734-62.198 98.98-62.198 20.89 0 41.431 6.062 59.433 17.51a103.997 103.997 0 0 1 40.143 46.41l98.16 199.332 220.611 38.707c41.35 6.206 76.534 36.987 88.044 76.944a111.718 111.718 0 0 1-27.464 113.438l-0.84 0.82L832.718 660.01l39.792 214.487a110.797 110.797 0 0 1-42.844 108.544c-17.449 14.48-40.98 22.733-64.9 22.733z m-13.906-89.457c6.82 3.216 12.002 3.912 13.415 3.912a19.005 19.005 0 0 0 11.878-3.748l1.167-0.922c8.684-6.492 12.78-16.138 10.957-25.763l-0.02-0.144-48.067-259.215 16.814-16.794L931.39 450.048a26.42 26.42 0 0 0 6.41-27.156l-0.347-1.045-0.308-1.044a23.511 23.511 0 0 0-18.8-16.425l-1.516-0.246-263.782-45.834-118.129-240.354-0.41-1.003c-3.051-7.148-13.045-13.19-21.81-13.19-9.299 0-18.207 5.94-22.693 15.115l-0.102 0.205-118.559 238.612-265.01 48.149c-12.391 1.597-18.126 10.404-20.768 17.838-2.293 9.441 0.82 21.32 7.414 28.242l193.7 180.203-7.844 23.45-45.138 234.537c-1.74 8.868 2.683 19.415 10.547 25.15l0.226 0.163c3.952 2.929 9.031 4.526 14.254 4.526 4.055 0 7.987-0.962 11.346-2.806l1.331-0.675 240.845-119.42 238.612 119.276z m0 0"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

KqShoucang.defaultProps = {
  size: 18,
};

export default KqShoucang;
