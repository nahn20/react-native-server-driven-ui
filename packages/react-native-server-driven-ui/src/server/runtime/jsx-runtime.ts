import { RenderedSDUI, SDUINode } from "../../types";
import renderSDUI from "./renderSDUI";

export type FunctionComponent = (
	props: Record<string, unknown>,
) => RenderedSDUI;

export interface JSXChildren {
	children?: SDUINode | SDUINode[];
}

// Set the attributes to allow any keys and very permissive values
export type HTMLAttributes = Record<string, SDUINode | undefined> & JSXChildren;

namespace JSX {
	// Allow any HTML tag
	export type IntrinsicElements = Record<string, HTMLAttributes>;

	// Declare the shape of JSX rendering result
	// This is required so the return types of components can be inferred
	export type Element = RenderedSDUI;
}

// Export the main namespace
export { JSX };

// Export factories
export const jsx = renderSDUI;
export const jsxs = renderSDUI;
export const jsxDEV = renderSDUI;
export const Fragment = renderSDUI;
