//@@viewOn:imports
import { Utils, createVisualComponent, useState } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Uu5Tiles from "uu5tilesg02";
import Uu5TilesControls from "uu5tilesg02-controls";
import Uu5TilesElements from "uu5tilesg02-elements";

import Tile from "../../bricks/tile.js";

import Config from "./config/config.js";

//@@viewOff:imports

//@@viewOn:constants
const DATA = [
  {
    id: "tygr01",
    speciesName: "Bengal tiger",
    speciesTaxonomyName: "Panthera tigris",
    class: "Mammalia",
    order: "Carnivora",
    family: "Felidae",
    location: "Asia",
    description: "",
    img: "tygr_01",
  },
  {
    id: "pavian01",
    speciesName: "Hamadryas baboon",
    speciesTaxonomyName: "Papio hamadryas",
    class: "Mammalia",
    order: "Primates",
    family: "Cercopithecidae",
    location: "Africa",
    description: "",
    img: "pavian_01",
  },
  {
    id: "malpa01",
    speciesName: "Golden-bellied capuchin",
    speciesTaxonomyName: "Sapajus xanthostemos",
    class: "Mammalia",
    order: "Primates",
    family: "Cebidae",
    location: "America",
    description: "",
    img: "malpa_01",
  },
  {
    id: "langur01",
    speciesName: "Red-shanked douc",
    speciesTaxonomyName: "Pygathrix nemaeus",
    class: "Mammalia",
    order: "Primates",
    family: "Cercopithecidae",
    location: "Asia",
    description: "",
    img: "langur_01",
  },
  {
    id: "orangutan01",
    speciesName: "Sumatran orangutan",
    speciesTaxonomyName: "Pongo abelii",
    class: "Mammalia",
    order: "Primates",
    family: "Hominidae",
    location: "Asia",
    description: "",
    img: "orangutan_01",
  },
  {
    id: "varan02",
    speciesName: "Komodo dragon",
    speciesTaxonomyName: "Varanus komodoensis",
    class: "Reptilia",
    order: "Squamata",
    family: "Varanidae",
    location: "Asia",
    description: "",
    img: "varan_02",
  },
];

const CLASS_LIST = [];
for (let item of DATA) {
  let itemClass = item.class;
  if (CLASS_LIST.indexOf(itemClass) === -1) CLASS_LIST.push(itemClass);
}

const FILTER_LIST = [
  {
    key: "speciesName",
    label: "Name",
    filter: (item, value) => {
      let fragments = value.split(/[\s,.-;:_]/);
      return fragments.some((frag) => {
        let itemValue =
          typeof item.speciesName === "object" ? Utils.Language.getItem(item.speciesName) : item.speciesName;
        return itemValue.toLowerCase().indexOf(frag.toLowerCase()) !== -1;
      });
    },
    inputProps: { placeholder: { en: "Enter value", cs: "Zadejte hodnotu" } },
  },
  {
    key: "class",
    label: "Class",
    filter: (item, value) => {
      return value.some((frag) => {
        let itemValue = typeof item.class === "object" ? Utils.Language.getItem(item.class) : item.class;
        return itemValue.toLowerCase().indexOf(frag.toLowerCase()) !== -1;
      });
    },
    inputType: "select",
    inputProps: {
      multiple: true,
      itemList: CLASS_LIST.map((it) => ({ value: it, children: it })),
      placeholder: { en: "Enter value", cs: "Zadejte hodnotu" },
    },
  },
];

const SORTER_LIST = [
  {
    key: "speciesName",
    label: "Name",
    sort: (a, b) => a.speciesName.localeCompare(b.speciesName),
  },
];
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let TilesExample = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TilesExample",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [filterList, setFilterList] = useState([]);
    const [sorterList, setSorterList] = useState([]);

    function onFilterChange(e) {
      setFilterList(e.data.filterList);
    }

    function onSorterChange(e) {
      setSorterList(e.data.sorterList);
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <div className={Config.Css.css({ padding: "16px 32px" })}>
          <Uu5Tiles.ControllerProvider
            data={DATA}
            filterDefinitionList={FILTER_LIST}
            filterList={filterList}
            onFilterChange={onFilterChange}
            sorterDefinitionList={SORTER_LIST}
            sorterList={sorterList}
            onSorterChange={onSorterChange}
          >
            <Uu5TilesControls.FilterButton />
            <Uu5TilesControls.SorterButton />
            <Uu5TilesControls.SearchButton />
            <Uu5TilesControls.FilterBar initialExpanded />
            <Uu5TilesControls.SorterBar initialExpanded />
            <Uu5TilesControls.Counter />
            <Uu5TilesElements.Grid tileMinWidth={100} tileMaxWidth={200}>
              {Tile}
            </Uu5TilesElements.Grid>
          </Uu5Tiles.ControllerProvider>
        </div>
      </div>
    );
    //@@viewOff:render
  },
});

TilesExample = withRoute(TilesExample, { authenticated: false });

//@@viewOn:exports
export { TilesExample };
export default TilesExample;
//@@viewOff:exports