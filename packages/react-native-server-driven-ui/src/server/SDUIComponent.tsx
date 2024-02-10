import type { ReactElement, ReactNode } from "react";

type RecursiveReplaceReactWithMockComponent<T> = {
	[K in keyof T]: T[K] extends ReactElement<any, any>
		? SDUIComponent<any>
		: T[K] extends Record<string, any>
		? RecursiveReplaceReactWithMockComponent<T[K]>
		: T[K];
};
abstract class SDUIComponent<
	P extends Record<string, any> & {
		children?:
			| SDUIComponent<any>[]
			| SDUIComponent<any>
			| string
			| number
			| null
			| boolean
			| Iterable<ReactNode>
			| ReactElement;
	},
> {
	readonly props: Readonly<RecursiveReplaceReactWithMockComponent<P>>;

	constructor(props: RecursiveReplaceReactWithMockComponent<P>) {
		this.props = props;
	}

	// There's a lot of stuff that VSCode expects of a component. These are fillers so that it doesn't complain.
	readonly context = {};
	readonly setState = (state: any) => {};
	readonly forceUpdate = () => {};
	readonly render = () => {
		return null;
	};
	readonly state = {};
	readonly refs = {};
}

export default SDUIComponent;
