"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LegendJudge_js_1 = require("./LegendJudge.js");
function Judge(params) {
    if (params >= 1.93) {
        return "일반 또는 희귀 또는 영웅";
    }
    else {
        return (0, LegendJudge_js_1.default)();
    }
}
exports.default = Judge;
