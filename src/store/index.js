import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function initializeForm() {
    return {
        record: {
            sarcf: {
                one: null,
                two: null,
                three: null,
                four: null,
                five: null,
            }
        }
    }
}

export default new Vuex.Store({
    state: {
        form: initializeForm(),
    }
})