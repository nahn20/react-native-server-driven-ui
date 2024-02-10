import { RenderedSDUI } from "../../types";

const renderSDUI = (
	sduiComponent: any,
	props: Record<string, any>,
): RenderedSDUI => {
	// Case of a fragment
	if (sduiComponent.children && !sduiComponent.id) {
		throw new Error("Fragment are not currently supported");
	}
	if (!sduiComponent.id) {
		if (typeof sduiComponent === "function") {
			return sduiComponent(props);
		}
		throw new Error(`Component expected to have a static id property`);
	}
	if (sduiComponent.transformProps) {
		props = sduiComponent.transformProps(props);
	}
	return {
		id: sduiComponent.id,
		...(props &&
			Object.keys(props).length > 0 && {
				props: props,
			}),
	};
};

export default renderSDUI;
