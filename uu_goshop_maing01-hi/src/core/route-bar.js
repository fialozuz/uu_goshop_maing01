//@@viewOn:imports
import { createVisualComponent, Lsi, useRoute, useState } from "uu5g05";
import Plus4U5App from "uu_plus4u5g02-app";
import Uu5Elements from "uu5g05-elements";

import Config from "./config/config.js";
import importLsi from "../lsi/import-lsi.js";
//import Logo from "../../mock/uufriends.png"
import { Button } from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const RouteBar = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "RouteBar",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    const [, setRoute] = useRoute();

    const TABS = [
      { children: <Lsi import={importLsi} path={["Menu", "home"]} />, onClick: () => setRoute("home") },
      { children: <Lsi import={importLsi} path={["Menu", "shoplist"]} />, onClick: () => setRoute("shopList") },
      { children: <Lsi import={importLsi} path={["Menu", "about"]} />, onClick: () => setRoute("about")},
    ];

    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return <Uu5Elements.Grid justifyItems="normal" height={250} templateColumns="1fr 3fr 1fr" style={{gap:"0px"}}>
            <Uu5Elements.Drawer
              sizeOf="elevated"
              height="100%"
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                content={(
                  <Uu5Elements.MenuList
                    itemBorderRadius="moderate"
                    itemList={[{ children: <Lsi import={importLsi} path={["Menu", "home"]} />, onClick: () => setRoute("home") },
                    { children: <Lsi import={importLsi} path={["Menu", "shoplist"]} />, onClick: () => setRoute("shopList") },
                    { children: <Lsi import={importLsi} path={["Menu", "about"]} />, onClick: () => setRoute("about")},]}
                  />
                )}
              >
              <div className={Config.Css.css({ padding: 24 })}>
                <Uu5Elements.Button
                style={{margin:"20px", width:"60px", height:"60px", fontSize: "20px"}}
                  icon={menuOpen ? "uugds-close" : "uugds-menu"}
                  significance="subdued"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className={Config.Css.css({ marginBottom: 24 })}
                />
              </div>
            </Uu5Elements.Drawer>  
            <img src="../../mock/goshopPlaceholder.png" alt="Group backgroud" onClick={() => setRoute("home")} style={{borderRadius: "10px", objectFit: "contain"}} width="100%" height={250}/>
            <Plus4U5Elements.PersonPhoto style={{margin:"20px", width:"60px", height:"60px", borderRadius: "30px"}}></Plus4U5Elements.PersonPhoto>
          </Uu5Elements.Grid>
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { RouteBar };
export default RouteBar;
//@@viewOff:exports
