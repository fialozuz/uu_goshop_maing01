//@@viewOn:imports
import { createComponent, useState } from "uu5g05";
import DarkmodeContext from "./darkmode-context.js";
import Config from "./config/config.js";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

export const DarkmodeProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "DarmodeProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [isDark, setIsDark] = useState(false);

    const value = [isDark, () => setIsDark((current) => !current)];
    //@@viewOff:private

    //@@viewOn:render
    return (
      <DarkmodeContext.Provider value={value}>
        {typeof props.children === "function" ? props.children(value) : props.children}
      </DarkmodeContext.Provider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default DarkmodeProvider;
//@@viewOff:exports
