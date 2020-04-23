// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
//                 snerks <https://github.com/snerks>
//                 Krzysztof Cebula <https://github.com/Havret>
//                 Vitaliy Polyanskiy <https://github.com/alreadyExisted>
//                 James Lismore <https://github.com/jlismore>
//                 Stack Builders <https://github.com/stackbuilders>
//                 Esteban Ibarra <https://github.com/ibarrae>
//                 Dominic Lee <https://github.com/dominictwlee>
//                 Dave Vedder <https://github.com/veddermatic>
//                 Alec Flett <https://github.com/alecf>

import * as React from "react";
import {
  DomainPropType,
  EventPropTypeInterface,
  VictoryAxisCommonProps,
  VictoryCommonProps
} from "victory-core";

export interface VictoryAxisProps extends VictoryAxisCommonProps, VictoryCommonProps {
  axisValue?: number | string | object;
  crossAxis?: boolean;
  domain?: DomainPropType;
  events?: EventPropTypeInterface<
    "axis" | "axisLabel" | "grid" | "ticks" | "tickLabels" | "parent",
    number | string
  >[];
  fixLabelOverlap?: boolean;
  gridComponent?: React.ReactElement;
  invertAxis?: boolean;
  label?: any;
  offsetX?: number;
  offsetY?: number;
  orientation?: "top" | "bottom" | "left" | "right";
}

/**
 * VictoryAxis draws an SVG chart axis with React.
 * Styles and data can be customized by passing in your own values as properties to the component.
 * Data changes are animated with VictoryAnimation.
 */
export class VictoryAxis extends React.Component<VictoryAxisProps, any> {}
