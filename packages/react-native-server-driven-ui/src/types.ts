export type RenderedSDUI = {
	id: string;
	props?: Record<string, unknown> & SDUIChildren;
};

export type SDUIChildren = {
	children?: SDUINode | SDUINode[];
};

export type SDUINode =
	| { id: string }
	| (() => SDUINode)
	| boolean
	| number
	| bigint
	| string
	| null
	| undefined;
