//@@viewOn:imports
import { createVisualComponent, Utils} from "uu5g05";
import Config from "./config/config.js";
import Uu5Tiles from "uu5tilesg02";
import Uu5TilesControls from "uu5tilesg02-controls";
import Uu5TilesElements from "uu5tilesg02-elements";
import { useDarkmodeContext } from "../context/darkmode-context.js";

import Tile from "../../bricks/tile.js";
import Uu5Elements from "uu5g05-elements";
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

const ListDetail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListDetail",
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
    const { data, filterOpen } = props;
    //@@viewOff:private

    //@@viewOn:interface
    const [isDark] = useDarkmodeContext();
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    return (
      <div {...attrs}>
        <div className={Config.Css.css({ padding: "16px 32px" })}>
          <Uu5Tiles.ControllerProvider
            data={data}
            /* filterDefinitionList={FILTER_LIST}
            filterList={filterList}
            onFilterChange={onFilterChange}
            sorterDefinitionList={SORTER_LIST}
            sorterList={sorterList}
            onSorterChange={onSorterChange} */
          >
            {filterOpen===true ? (
            <div>
              <Uu5TilesControls.FilterButton />
              <Uu5TilesControls.SorterButton />
              <Uu5TilesControls.SearchButton />
              <Uu5TilesControls.FilterBar />
              <Uu5TilesControls.SorterBar />
              <Uu5TilesControls.Counter />
            </div>
          ) : null}
            <Uu5TilesElements.Grid significance={isDark ? "highlighted" : "distinct"} tileMinWidth={300} tileMaxWidth={350}>
                {Tile}
              </Uu5TilesElements.Grid>
            </Uu5Tiles.ControllerProvider>
            <Uu5Elements.Pagination justifyItem="center" count={4}></Uu5Elements.Pagination>
        </div>
      </div>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListDetail };
export default ListDetail;
//@@viewOff:exports
