var SDUIComponent = /** @class */ (function () {
    function SDUIComponent(props) {
        // There's a lot of stuff that VSCode expects of a component. These are fillers so that it doesn't complain.
        this.context = {};
        this.setState = function (state) { };
        this.forceUpdate = function () { };
        this.render = function () {
            return null;
        };
        this.state = {};
        this.refs = {};
        this.props = props;
    }
    return SDUIComponent;
}());
export default SDUIComponent;
