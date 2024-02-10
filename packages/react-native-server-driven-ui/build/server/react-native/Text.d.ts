import type { TextProps as NativeTextProps } from "react-native";
import SDUIComponent from "../SDUIComponent";
export interface TextProps extends NativeTextProps {
}
declare class Text extends SDUIComponent<TextProps> {
    static id: string;
}
export default Text;
