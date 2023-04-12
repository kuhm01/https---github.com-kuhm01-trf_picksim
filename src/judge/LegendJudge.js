function LegendJudge() {
    const legend_randomnumber = Math.round(Math.random() * 10);

    if (legend_randomnumber < 5) {
        return "일반 전설"
    } else {
        return "픽업 전설"
    }
}

export default LegendJudge;