export const useStore = defineStore("index", {
    state: () => ({
        navActive: false,
        modal: {
            eventPP: false
        }
    }),
    getters: {
        getModal: (state) => {
            return Object.values(state.modal).find((item) => {
                return item
            });
        }
    }
});