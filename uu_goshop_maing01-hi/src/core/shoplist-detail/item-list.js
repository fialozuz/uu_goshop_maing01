//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import Item from "./item.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({display: "inline-block",width: 320}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ItemList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ItemList",
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
    const { data, onUnactive, onNameChange, onDelete } = props;

    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div {...attrs}>
        {data.map((item, i) => (
          <Item
            key={item.id || i}
             {...item}
            onUnactive={() => onUnactive(item.id)}
            onNameChange={(newName) => onNameChange(item.id, newName)}
            onDelete={onDelete ? () => onDelete(item.id) : undefined}
          />
        ))}
        <br></br>
      </div>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ItemList };
export default ItemList;
//@@viewOff:exports
