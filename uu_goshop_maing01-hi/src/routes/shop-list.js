//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";

import RouteBar from "../core/route-bar.js";
import ShoplistDetail from "../core/shoplist-detail/shoplist-detail.js";


//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ShopList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShopList",
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
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ShopList);

    return currentNestingLevel ? (
      <div {...attrs}>
        <RouteBar />
        <Uu5Elements.Grid justifyItems="center">
          <ShoplistDetail/>
          <dr></dr>
        </Uu5Elements.Grid>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShopList };
export default ShopList;
//@@viewOff:exports
