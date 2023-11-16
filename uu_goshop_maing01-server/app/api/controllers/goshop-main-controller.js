"use strict";
const GoshopMainAbl = require("../../abl/goshop-main-abl.js");

class GoshopMainController {
  init(ucEnv) {
    return GoshopMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return GoshopMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return GoshopMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new GoshopMainController();
