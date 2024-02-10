import { RenderedSDUI, SDUINode } from "../../types";
export type FunctionComponent = (props: Record<string, unknown>) => RenderedSDUI;
export interface JSXChildren {
    children?: SDUINode | SDUINode[];
}
export type HTMLAttributes = Record<string, SDUINode | undefined> & JSXChildren;
declare namespace JSX {
    type IntrinsicElements = Record<string, HTMLAttributes>;
    type Element = RenderedSDUI;
}
export { JSX };
export declare const jsx: (sduiComponent: any, props: Record<string, any>) => any;
export declare const jsxs: (sduiComponent: any, props: Record<string, any>) => any;
export declare const jsxDEV: (sduiComponent: any, props: Record<string, any>) => any;
