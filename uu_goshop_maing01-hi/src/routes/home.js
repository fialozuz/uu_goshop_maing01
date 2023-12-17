//@@viewOn:imports
import { Utils, createVisualComponent, Lsi } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import ShoplistList from "../core/shoplist-list/shoplist-list.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";

import { useDarkmodeContext } from "../core/context/darkmode-context.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  icon: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Home = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    const [isDark]= useDarkmodeContext()
    return (
      <div {...attrs} style={{background: isDark ? "#252525" : "white"}}>
        <RouteBar />
        <Uu5Elements.Grid justifyItems="center">
          <ShoplistList/>
          <dr></dr>
        </Uu5Elements.Grid>
      </div>
    );
    //@@viewOff:render
  },
});

Home = withRoute(Home, { authenticated: false });

//@@viewOn:exports
export { Home };
export default Home;
//@@viewOff:exports
