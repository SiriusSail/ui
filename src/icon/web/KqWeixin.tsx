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

const KqWeixin: FunctionComponent<Props> = ({
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
        d="M675.74656001 324.94834987c10.94079787 0 21.76592533 0.80336213 32.50378026 1.99862933C679.04531413 190.9613088 533.65326187 89.9252224 367.69830613 89.9252224c-185.53678507 0-337.51968427 126.46099627-337.51968426 287.04418453 0 92.69248 50.56386347 168.810032 135.05921066 227.84857387l-33.75792106 101.53055573 117.9902496-59.16622826c42.2198208 8.3567136 76.09352213 16.94815573 118.22716267 16.94815573 10.5914912 0 21.0935264-0.52286827 31.50828906-1.34152213-6.59423253-22.56513707-10.41465387-46.19993067-10.41465387-70.72219094C388.79183147 444.6134816 515.41972693 324.94834987 675.74656001 324.94834987zM494.26721814 233.4391232c25.4139872 0 42.249312 16.71888853 42.249312 42.1166016 0 25.2961312-16.8353248 42.24756373-42.249312 42.24756373-25.29722347 0-50.6806272-16.95143253-50.6806272-42.24756373C443.58659094 250.15691947 468.96999467 233.4391232 494.26721814 233.4391232zM258.04980587 317.8020864c-25.29394667 0-50.8246976-16.95143253-50.82469759-42.24756373 0-25.3976032 25.5296576-42.1166016 50.82469759-42.1166016 25.2961312 0 42.13254827 16.71888853 42.13254826 42.1166016C300.18235413 300.85076267 283.34593707 317.8020864 258.04980587 317.8020864zM983.7969984 588.01171093c0-134.9377504-135.03299627-244.92878507-286.69170987-244.92878506-160.58996053 0-287.07039893 109.99092587-287.07039892 244.92878506 0 135.17029333 126.48164053 244.92878507 287.07039892 244.92878507 33.6116672 0 67.51376747-8.47566187 101.27168854-16.9361408l92.57735466 50.6937344-25.38340373-84.34548693C933.319424 731.526704 983.7969984 664.12937173 983.7969984 588.01171093zM604.02920428 545.77943893c-16.8058336 0-33.75792107-16.71888853-33.75792107-33.77179306 0-16.81719253 16.95208747-33.75322453 33.75792107-33.75322454 25.5296576 0 42.249312 16.9361408 42.249312 33.75322454C646.27851627 529.0605504 629.55886293 545.77943893 604.02920428 545.77943893zM789.68275307 545.77943893c-16.69016213 0-33.52548693-16.71888853-33.52548694-33.77179306 0-16.81719253 16.8353248-33.75322453 33.52548694-33.75322454 25.2961312 0 42.2460352 16.9361408 42.24603521 33.75322454C831.92987947 529.0605504 814.97986773 545.77943893 789.68275307 545.77943893z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqWeixin.defaultProps = {
  size: 18,
};

export default KqWeixin;
