import type { ViewProps as NativeViewProps } from "react-native";
import SDUIComponent from "../SDUIComponent";

export interface ViewProps extends NativeViewProps {}
class View extends SDUIComponent<ViewProps> {
	public static id = "View";
}

export default View;
