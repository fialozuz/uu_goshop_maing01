//@@viewOn:imports
import { createVisualComponent, useState } from "uu5g05";
import Uu5Forms from "uu5g05-forms";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const TextInput = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TextInput",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { id, value, onChange, ...restProps } = props;
    const [v, setV] = useState(value);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <Uu5Forms.Text.Input
        value={v}
        onChange={(e) => setV(e.data.value)}
        onBlur={() => onChange(v)}
        significance={id ? "subdued" : undefined}
        {...restProps}
      />
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { TextInput };
export default TextInput;
//@@viewOff:exports
