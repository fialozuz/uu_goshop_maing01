//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
import Config from "./config/config.js";
import TextInput from "./text-input.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  unactive: () => Config.Css.css({marginRight: 16}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Item = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Item",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const { id, itemName, active,  onUnactive, onNameChange, onDelete  } = props;

    //@@viewOn:render
    return (
      <Uu5Elements.ListItem style={{backgroundColor:"transparent"}}>
        <Uu5Elements.Box /* style={{display: "inline-flex"}} */ width="100%" height={40} borderRadius="moderate" colorScheme="building" >
        <Uu5Forms.Checkbox.Input
          style={{margin: "10px"}}
          icon={!id ||active ? undefined : "uugds-check"}
          onClick={onUnactive}
          className={Css.unactive()}
          disabled={!id|| active===false}
        />
        <TextInput id={id} value={itemName} onChange={onNameChange} /* onkeydown={ta} */ readOnly={active} significance="subdued"  width="83%" disabled={active===false}/>
        {id && onDelete 
              ? <Uu5Elements.Icon style={{margin: "10px", fontSize: "20px", justifyItem:"right"}} icon="uugds-close" onClick={onDelete} />
              : undefined}
        
        </Uu5Elements.Box>
      </Uu5Elements.ListItem>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Item };
export default Item;
//@@viewOff:exports
