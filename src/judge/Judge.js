"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LegendJudge_js_1 = require("./LegendJudge.js");
var legend_pick_store_1 = require("../store/legend_pick_store");
function Judge(params) {
    var _a = (0, legend_pick_store_1.default)(function (state) { return state; }), nonePick = _a.nonePick, nonePicked = _a.nonePicked, summonPicked = _a.summonPicked;
    if (params < 1.93) {
        return (0, LegendJudge_js_1.default)(nonePick, nonePicked, summonPicked);
    }
    else {
        return "일반 또는 희귀 또는 영웅";
    }
}
exports.default = Judge;
