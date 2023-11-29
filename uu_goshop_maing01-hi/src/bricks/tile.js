//@@viewOn:imports
import React from "react";
import { createVisualComponent, useRoute } from "uu5g05";
import { Config } from "uu5g05-dev";
import Uu5Elements from "uu5g05-elements";
import Uu5TilesElements from "uu5tilesg02-elements";
//@@viewOff:imports

const Tile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: "Uu5TilesElements.Mock.Tile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    let { data, ...otherProps } = props;
    const [, setRoute] = useRoute();
    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Uu5TilesElements.Tile  {...otherProps} onClick={() => setRoute("shopList")} headerOverlap>
        {({ padding }) => {
          return (
            <>
              <div
                className={Config.Css.css({
                  paddingTop: padding.top,
                  paddingRight: padding.right,
                  paddingBottom: padding.bottom,
                  paddingLeft: padding.left,
                })}
              >
                <div>
                  <strong>{data.listName}</strong>
                  <Uu5Elements.Line/>
                </div>
                <Uu5Elements.Text key="location" colorScheme={"green"}>
                {data.owner.name}
                </Uu5Elements.Text>
              </div>
            </>
          );
        }}
      </Uu5TilesElements.Tile>
    );
    //@@viewOff:render
  },
});

export default Tile;