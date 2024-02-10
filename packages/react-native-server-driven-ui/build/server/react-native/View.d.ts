import type { ViewProps as NativeViewProps } from "react-native";
import SDUIComponent from "../SDUIComponent";
export interface ViewProps extends NativeViewProps {
}
declare class View extends SDUIComponent<ViewProps> {
    static id: string;
}
export default View;
