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

const KqShuaxin: FunctionComponent<Props> = ({
  size,
  color,
  style: _style,
  ...rest
}) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg
      viewBox="0 0 1203 1024"
      width={size + 'px'}
      height={size + 'px'}
      style={style}
      {...rest}
    >
      <path
        d="M821.744368 830.273343c-66.792495 47.40846-144.953925 71.169535-224.87754 70.032641-10.57311-0.113689-21.03253-0.682136-31.435106-1.591651-4.263351-0.397913-8.469857-1.080049-12.733208-1.648496-8.185633-1.080049-16.314422-2.216942-24.272677-3.751749-4.945487-0.966359-9.72044-2.216942-14.552237-3.353836-7.787721-1.875874-15.518597-3.694904-23.135783-6.025536-3.638059-1.136894-7.219274-2.444321-10.857333-3.694904-8.75408-2.955923-17.50816-6.025536-26.034862-9.663595-1.932719-0.795825-3.751749-1.70534-5.684468-2.55801-9.890974-4.433885-19.781947-9.038304-29.218164-14.268014-0.454757-0.227379-0.85267-0.454757-1.307428-0.682136-32.117242-17.849228-61.562785-40.189186-87.370268-66.280893-0.397913-0.397913-0.795825-0.909515-1.250583-1.364272-8.015099-8.128789-15.632286-16.65549-22.908405-25.52326-1.534806-1.875874-3.012768-3.922283-4.547574-5.855002-52.467636-66.508271-84.130121-150.638392-84.130121-242.215166L306.447376 511.829466c2.273787 0 4.547574-1.250583 5.684468-3.410681 1.193738-2.160098 0.966359-4.718108-0.284223-6.650827L162.175588 274.502942c-1.136894-1.762185-3.126457-2.899078-5.400244-2.899078-2.273787 0-4.263351 1.136894-5.400244 2.899078L1.703067 501.824803C0.452484 503.757522 0.225105 506.258688 1.418843 508.418785c1.193738 2.160098 3.410681 3.410681 5.684468 3.410681l89.075608 0c0 107.663817 33.140446 207.426224 89.473521 289.907849 0.682136 1.136894 1.193738 2.387476 1.932719 3.52437 5.855002 8.413012 12.27845 16.200733 18.531364 24.215832 2.330632 3.012768 4.490729 6.139225 6.935051 9.095148 9.208838 11.312091 18.986122 21.942045 29.04763 32.344621 0.966359 1.023204 1.875874 2.046408 2.785389 2.955923 33.765738 34.27734 72.022205 63.097591 113.575663 86.176529 1.080049 0.625291 2.160098 1.307428 3.353836 1.932719C373.751473 968.519596 386.086768 974.431442 398.535752 980.00222c3.126457 1.364272 6.139225 2.842234 9.322527 4.206506 10.686799 4.490729 21.600977 8.413012 32.685689 12.164761 5.22971 1.81903 10.402576 3.638059 15.689131 5.286555 9.663595 2.899078 19.497724 5.286555 29.445542 7.674031 6.593982 1.534806 13.13112 3.240147 19.838792 4.547574 2.785389 0.568447 5.400244 1.421117 8.185633 1.875874 9.379372 1.70534 18.815588 2.614855 28.194959 3.751749 3.410681 0.397913 6.707672 0.966359 10.118352 1.364272 16.882869 1.70534 33.652048 2.785389 50.421228 2.785389 102.71833 0 202.935495-31.833019 288.884645-92.770512 27.399134-19.497724 34.049961-57.697347 14.893305-85.494393C886.945212 817.540135 849.143502 810.775619 821.744368 830.273343L821.744368 830.273343zM1106.763575 511.829466c-0.056845-107.322749-32.969912-206.857777-89.018763-289.225713-0.795825-1.421117-1.364272-2.842234-2.273787-4.149661-6.935051-10.061508-14.552237-19.440879-22.112579-28.820251-0.85267-1.136894-1.70534-2.330632-2.614855-3.467525-51.273898-62.983901-115.678916-111.642944-188.610636-143.419118-2.046408-0.909515-3.979127-1.875874-6.025536-2.785389-11.653159-4.831797-23.590541-9.151993-35.584767-13.187965-4.320195-1.421117-8.583546-3.012768-13.017431-4.320195-10.45942-3.183302-21.03253-5.798157-31.776174-8.299323-5.911846-1.364272-11.823693-2.899078-17.792384-4.092817-2.955923-0.568447-5.741312-1.477962-8.697235-1.989564-7.958255-1.364272-15.973354-1.989564-23.988453-3.069613-5.570778-0.682136-10.971023-1.591651-16.541801-2.160098C635.350674 1.591651 621.992175 1.023204 608.690521 0.795825c-2.444321 0-4.774953-0.397913-7.219274-0.397913-0.454757 0-0.85267 0.113689-1.307428 0.170534C497.616023 0.625291 397.569393 32.003553 311.733931 92.884201 284.277953 112.32508 277.570281 150.581548 296.783782 178.378594c19.156656 27.797047 57.072055 34.504719 84.471189 15.063839 66.337737-47.010547 143.703342-70.828467 223.05851-70.089486 11.42578 0.056845 22.624181 0.625291 33.765738 1.70534 3.410681 0.397913 6.821361 0.909515 10.232042 1.307428 9.151993 1.136894 18.190296 2.444321 27.114911 4.206506 3.922283 0.795825 7.844565 1.81903 11.653159 2.6717 8.75408 1.989564 17.50816 4.149661 26.034862 6.764516 2.728544 0.85267 5.3434 1.875874 8.071944 2.728544 9.777284 3.240147 19.32719 6.707672 28.820251 10.686799 0.966359 0.397913 1.932719 0.909515 2.842234 1.307428 56.503608 24.613745 106.072166 62.472299 144.783391 109.880759 0.227379 0.284223 0.454757 0.625291 0.682136 0.909515 54.4572 67.076718 87.199734 152.855335 87.256578 246.251138l-89.075608 0c-2.273787 0-4.547574 1.250583-5.684468 3.410681-1.193738 2.160098-0.966359 4.718108 0.284223 6.650827l149.728878 227.321861c1.136894 1.762185 3.126457 2.899078 5.400244 2.899078 2.273787 0 4.263351-1.136894 5.400244-2.899078l149.672033-227.321861c1.250583-1.932719 1.477962-4.433885 0.284223-6.650827-1.193738-2.160098-3.410681-3.410681-5.684468-3.410681L1106.763575 511.829466 1106.763575 511.829466"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqShuaxin.defaultProps = {
  size: 18,
};

export default KqShuaxin;
