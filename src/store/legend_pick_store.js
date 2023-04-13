import { create } from 'zustand';

const useLegendPickStore = create(set => ({
    nonePick: 0,
    nonePicked: () => set({nonePick: 1}),
    summonPicked: () => set({nonePick: 0})
}))

export default useLegendPickStore;