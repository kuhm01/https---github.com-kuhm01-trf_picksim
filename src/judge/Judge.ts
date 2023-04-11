function Judge(params: number) {
    if (params > 1.93) {
        return "일반 또는 희귀 또는 영웅";
    } else {
        return "전설";
    }
}

export default Judge;