//@@viewOn:imports
import { createVisualComponent, useSession, useState, Utils, Content } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "./config/config.js";
import TextInput from "./text-input.js";

import { mockList } from "../../../mock/data/mockList.js";
import ItemList from "./item-list.js";
import Plus4U5Elements from "uu_plus4u5g02-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  panel: () =>
    Config.Css.css({
      margin: "32px 16px",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ShoplistDetail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoplistDetail",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    data: mockList[1]
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { data } = props;

    const [listName,  setName ] = useState(data.listName);
    //const [idMembers, setIdMembers] = useState(data.idMembers);
    const [itemes, setItemes] = useState(data.itemes);

    //const [modalOpen, setModalOpen] = useState(false);
    
    const { identity } = useSession();
    const isOwner = identity?.uuIdentity === data.owner.id;

    const activeItemes = [];
    const unactiveItemes = [];
    itemes.forEach((item) => {
      item.active ? activeItemes.push(item) : unactiveItemes.push(item);
    });
    activeItemes.push({});

    const [unactiveOpen, setUnactiveOpen] = useState(false);


    function handleUnactiveItem(id) {
      if (id) {
        setItemes(([...currItemes]) => {
          const index = currItemes.findIndex((item) => item.id === id);
          const item = currItemes[index];
          currItemes.splice(index, 1, { ...item, active: !item.active });
          return currItemes;
        });
      }
    }

    function handleChangeItemName(id, itemName) {
      setItemes(([...currItemes]) => {
        if (id) {
          const index = currItemes.findIndex((item) => item.id === id);
          const item = currItemes[index];
          currItemes.splice(index, 1, { ...item, itemName });
        } else {
          if (itemName) currItemes.push({ id: Utils.String.generateId(), itemName, active: true });
        }
        return currItemes;
      });
    }

    function handleDelete(id) {
      setItemes(([...currItemes]) => {
        const index = currItemes.findIndex((item) => item.id === id);
        currItemes.splice(index, 1);
        return currItemes;
      });
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <Uu5Elements.Box width="75%" height="auto" borderRadius="expressive" significance="distinct">
        <Uu5Elements.Grid templateColumns="10% auto 10%" style={{gap:"0px"}}>
          <div></div>
          <Uu5Elements.Grid templateColumns=" auto 50px 50px">
            <Uu5Elements.Text className={Css.panel()}  category="interface" segment="title" type="common">
            {isOwner
                ? ({ style }) => (
                    <TextInput className={Config.Css.css(style)} id={"header"} value={listName} onChange={setName} />
                  )
                : listName}
            </Uu5Elements.Text>
            <Plus4U5Elements.PersonPhoto style={{margin:"20px", width:"40px", height:"40px", borderRadius: "20px"}}></Plus4U5Elements.PersonPhoto>
            <Uu5Elements.Button style={{margin: "20px 10px"}} icon="mdi-dots-horizontal" width="40px" height="40px" borderRadius="full" fontSize= "50px" />

            
          </Uu5Elements.Grid>
          <div></div>

          <div></div>
          <div>
            <Uu5Elements.Line/>
            <br></br>
          </div>
          <div></div>

          <div></div>
          <ItemList
          style={{width: "100%"}}
          data={activeItemes}
          onUnactive={handleUnactiveItem}
          onNameChange={handleChangeItemName}
          onDelete={handleDelete}
          />
          <div></div>

          <div></div>
          {unactiveItemes.length ? (
            <div>
              
              <Uu5Elements.Grid templateColumns="auto 160px" alignItems= "center">
                <Uu5Elements.Line
                style={{margin: "0px"}}
                />
                
                <Uu5Elements.Button id="ahojk" style={{marginBottom: "16px"}} icon={unactiveOpen===true?"mdi-chevron-up":"mdi-chevron-down"} open={unactiveOpen} onClick={() => setUnactiveOpen(!unactiveOpen)}>Show checked</Uu5Elements.Button>
              </Uu5Elements.Grid>  
            </div>
          ) : null}
          <div></div>

          <div></div>
          {unactiveOpen===true ? (
          <ItemList style={{width: "100%"}} data={unactiveItemes}  />
          ) : null}
        <div></div>
          
        
        </Uu5Elements.Grid>
      </Uu5Elements.Box>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoplistDetail };
export default ShoplistDetail;
//@@viewOff:exports
