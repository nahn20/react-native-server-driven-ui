import type { ReactElement, ReactNode } from "react";
type RecursiveReplaceReactWithMockComponent<T> = {
    [K in keyof T]: T[K] extends ReactElement<any, any> ? SDUIComponent<any> : T[K] extends Record<string, any> ? RecursiveReplaceReactWithMockComponent<T[K]> : T[K];
};
declare abstract class SDUIComponent<P extends Record<string, any> & {
    children?: SDUIComponent<any>[] | SDUIComponent<any> | string | number | null | boolean | Iterable<ReactNode> | ReactElement;
}> {
    readonly props: Readonly<RecursiveReplaceReactWithMockComponent<P>>;
    constructor(props: RecursiveReplaceReactWithMockComponent<P>);
    readonly context: {};
    readonly setState: (state: any) => void;
    readonly forceUpdate: () => void;
    readonly render: () => null;
    readonly state: {};
    readonly refs: {};
}
export default SDUIComponent;
