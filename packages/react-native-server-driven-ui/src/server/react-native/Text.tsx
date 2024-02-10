import type { TextProps as NativeTextProps } from "react-native";
import SDUIComponent from "../SDUIComponent";

export interface TextProps extends NativeTextProps {}
class Text extends SDUIComponent<TextProps> {
	public static id = "Text";
}

export default Text;
