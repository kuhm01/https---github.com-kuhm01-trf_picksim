function LegendJudge(nonePick, nonePicked, summonPicked) {
    const legend_randomnumber = Math.round(Math.random() * 10);

    if (nonePick === 1) {
        summonPicked();
        return "픽업 전설";
    } else if (legend_randomnumber < 5) {
        nonePicked();
        return "일반 전설";
    } else {
        summonPicked();
        return "픽업 전설";
    }
}

export default LegendJudge;