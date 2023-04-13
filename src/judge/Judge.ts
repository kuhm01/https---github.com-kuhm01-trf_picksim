import LegendJudge from "./LegendJudge.js";
import useLegendPickStore from "../store/legend_pick_store";

function Judge(params: number) {

    const { nonePick, nonePicked, summonPicked } = useLegendPickStore(state => state);

    if (params < 1.93) {
        return LegendJudge(nonePick, nonePicked, summonPicked);
    } else {
        return "일반 또는 희귀 또는 영웅";
    }
}

export default Judge;