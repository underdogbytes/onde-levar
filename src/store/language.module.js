export const SET_LANGUAGE = 'setLanguage'
export const UPDATE_LANGUAGE = 'updateLanguage'

export default {
    state: {
        language: window.localStorage.getItem('language') ?? 'br'
    },
    getters: {
        language (state) { return state.language }
    },
    actions: {
        [SET_LANGUAGE] (state, payLoad) {
            state.commit(UPDATE_LANGUAGE, payLoad)
            window.localStorage.setItem('language', payLoad)
        }
    },
    mutations: {
        [UPDATE_LANGUAGE] (state, payLoad) {
            state.language = payLoad
        }
    }
}