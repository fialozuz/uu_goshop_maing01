//@@viewOn:imports
import { createVisualComponent, Utils, useState } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";

import ListDetail from "./list-detail.js";
import { mockList } from "../../../mock/data/mockList.js";
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

const ShoplistList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoplistList",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    data: mockList
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    const { data } = props;

    /* const [archivList, setArchivList] = useState(data.archiv); */

    const activeLists = [];
    const archivatedLists = [];
    data.forEach((list) => {
      list.archiv ? archivatedLists.push(list) : activeLists.push(list);
    });
    
    const [filterOpen, setFilterOpen] = useState(false);
    const [archivatedOpen, setArchivatedOpen] = useState(false); 

    /* function handleArchivList(idList) {
      if (idList) {
        setArchivList(([...currLists]) => {
          const index = currLists.findIndex((list) => list.id === id);
          const list = currLists[index];
          currLists.splice(index, 1, { ...list, archiv: !list.archiv });
          return currLists;
        });
      }
    } */

    return (
      <Uu5Elements.Grid templateColumns="100vw">
        
        <Uu5Elements.Grid templateColumns="auto 200px" alignItems= "center" >
          <Uu5Elements.Line style={{marginLeft: "25px"}}/>
          
          <Uu5Elements.Button style={{marginRight: "25px"}} id="ahojk" icon={filterOpen===true?"mdi-chevron-up":"mdi-chevron-down"} open={filterOpen} onClick={() => setFilterOpen(!filterOpen)}>Filter</Uu5Elements.Button>
        </Uu5Elements.Grid>

        <ListDetail
          justifyItem="center"
          style={{width: "100%"}}
          data={activeLists}
          filterOpen={filterOpen}
          />
        
        {archivatedLists.length ? (
            <div>
              <Uu5Elements.Grid templateColumns="auto 200px" alignItems= "center" >
                <Uu5Elements.Line style={{marginLeft: "25px"}}/>
                
                <Uu5Elements.Button style={{marginRight: "25px"}} id="archiv" icon={archivatedOpen===true?"mdi-chevron-up":"mdi-chevron-down"} open={archivatedOpen} onClick={() => setArchivatedOpen(!archivatedOpen)}>Archivated</Uu5Elements.Button>
              </Uu5Elements.Grid> 
            </div>
          ) : null}

        {archivatedOpen===true ? (
          <ListDetail justifyItem="center" style={{width: "100%"}} data={archivatedLists}  />
          ) : null}
        
      </Uu5Elements.Grid>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoplistList };
export default ShoplistList;
//@@viewOff:exports
