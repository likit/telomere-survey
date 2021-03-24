import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function initializeForm() {
    return {
        record: {
            code: null,
            recordDate: new Date(),
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