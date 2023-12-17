//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

export const LanguageProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "LanguageProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const [language, setLanguage] = useState(props.initialLanguageList?.[0] || "en");
    console.log(language);

    const value = {
      language,
      languageList: props.initialLanguageList,
      languageSelector: (
        <Select
          value={language}
          itemList={props.initialLanguageList.map((item) => {
            return { value: item, children: item.toUpperCase() };
          })}
          onChange={(e) => setLanguage(e.data.value)}
        />
      ),
      setLanguage,
    };
    //@@viewOff:private

    //@@viewOn:render
    return (
      <LanguageContext.Provider value={value}>
        {typeof props.children === "function" ? props.children(value) : props.children}
      </LanguageContext.Provider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { LanguageProvider };
export default LanguageProvider;
//@@viewOff:exports
