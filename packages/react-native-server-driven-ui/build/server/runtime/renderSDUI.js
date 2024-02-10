var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var renderSDUI = function (sduiComponent, props) {
    // Case of a fragment
    if (sduiComponent.children && !sduiComponent.id) {
        throw new Error("Fragment are not currently supported");
    }
    if (!sduiComponent.id) {
        if (typeof sduiComponent === "function") {
            return sduiComponent(props);
        }
        throw new Error("Component expected to have a static id property");
    }
    if (sduiComponent.transformProps) {
        props = sduiComponent.transformProps(props);
    }
    return __assign({ id: sduiComponent.id }, (props &&
        Object.keys(props).length > 0 && {
        props: props,
    }));
};
export default renderSDUI;
