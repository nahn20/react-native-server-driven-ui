const renderSDUI = (sduiComponent: any, props: Record<string, any>) => {
	// Case of <></>
	if (!sduiComponent) {
		// This should be possible to implement, just haven't gotten around to it
		throw new Error("<></> is not supported yet");
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
