import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function initializeForm() {
    return {
        record: {
            code: null,
            recordDate: new Date(),
            personal: {
                height: null,
                weight: null,
                gender: null,
                age: 65,
                maritalStatus: null,
                address: null,
                education: null,
                living: null,
                saving: null,
                club: null,
                healthStatus: null,
                smoking: null,
                alcohol: null,
                underlyingDis: null,
                healthCoverage: null,
                hospitalized: null,
                fell: null,
                medication: null,
                job: {
                    jobBeforeRetirement: null,
                    jobAfterRetirement: null,
                    currentJob: {
                        duration: null,
                        quit: null,
                        quitReason: null,
                    }
                }
            },
            charlson: {
                score: 0,
                diseases: [],
            },
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
    },
    mutations: {
        updateCharlsonDisease (state, params) {
            let idx = state.form.record.charlson.diseases.indexOf(params.disease)
            if (idx == -1) {
                state.form.record.charlson.score += parseInt(params.score)
                state.form.record.charlson.diseases.push(params.disease)
            } else {
                state.form.record.charlson.score -= parseInt(params.score)
                state.form.record.charlson.diseases.splice(idx, 1)
            }
        }
    }
})