import { create } from 'zustand';

const useCountStore = create(set => ({
    count: 0,
    increaseCount: () => set(state => ({ count: state.count + 1 })),
    removeCount: () => set({count: 0})
}))

export default useCountStore;