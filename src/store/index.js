import Vue from 'vue'
import Vuex from 'vuex'
import {auth, records, followups} from '../firebase'
import {DialogProgrammatic, ToastProgrammatic, LoadingProgrammatic} from "buefy";

Vue.use(Vuex)

function initializeForm() {
    return {
        followUp: false,
        followUpInfo: {
            createdBy: null,
            province: null,
            recordCode: null,
            createdAt: null,
            updatedAt: null,
            updatedBy: null,
        },
        record: {
            followUpId: null,
            province: null,
            creator: null,
            lastUpdate: [],
            code: null,
            recordDate: new Date(),
            personal: {
                id: null,
                firstname: null,
                lastname: null,
                height: null,
                weight: null,
                gender: null,
                age: null,
                maritalStatus: null,
                maritalStatusOther: null,
                address: null,
                education: null,
                educationYear: null,
                educationOther: null,
                living: null,
                livingOther: null,
                saving: null,
                club: null,
                causeOfDeath: null,
                healthStatus: null,
                smoking: null,
                pastYearWeight: null,
                currentSmokingPerDay: null,
                currentSmokingPerWeek: null,
                smokingPerDay: null,
                smokingYears: null,
                quitSmokingYears: null,
                alcohol: null,
                currentDrinkPerDay: null,
                currentDrinkPerDayBottle: null,
                drinkPerDay: null,
                drinkPerDayBottle: null,
                drinkYears: null,
                quitDrinkYears: null,
                underlyingDis: null,
                underlyingDisOther: null,
                underlyingDiseases: [],
                followUpDisOther: null,
                followUpDiseases: [],
                healthCoverage: null,
                healthCoverageOther: null,
                healthCoverages: [],
                hospitalized: null,
                hospitalizationDetail: null,
                fell0: null,
                fell: null,
                fellTimes: null,
                fellCause: null,
                fellWithBrokenBone: null,
                fellWithBrokenBoneTimes: null,
                fellWithBrokenBoneWhere: null,
                medication: null,
                medicationTypes: null,
                job: {
                    jobBeforeRetirement: null,
                    jobBeforeRetirementOther: null,
                    jobAfterRetirement: null,
                    jobAfterRetirementOther: null,
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
            minicog: {
                items: [],
                score: null
            },
            clock: {
                score: 0,
                file: null,
            },
            frail: {
                fatigue: null,
                resistance: null,
                ambulation: null,
                illness: [],
                weightLoss: null,
                pastYearWeight: null,
                currentWeight: null,
                percentWeightChange: null,
                totalScore: null,
            },
            mna: {
                one: null,
                two: null,
                three: null,
                four: null,
                five: null,
                six: null,
            },
            pastYearAdlScore: null,
            currentAdlScore: null,
            adl: {
                one: null,
                two: null,
                three: null,
                four: null,
                five: null,
                six: null,
                seven: null,
                eight: null,
                nine: null,
                ten: null,
            },
            iadl: {
                one: null,
                two: null,
                three: null,
                four: null,
                five: null,
                six: null,
            },
            eq5d5l: {
                one: null,
                two: null,
                three: null,
                four: null,
                five: null,
            },
            gpaq: {
                p1: null,
                p2: null,
                p3: {
                    minutes: null,
                    hours: null
                },
                p4: null,
                p5: null,
                p6: {
                    minutes: null,
                    hours: null
                },
                p7: null,
                p8: null,
                p9: {
                    minutes: null,
                    hours: null
                },
                p10: null,
                p11: null,
                p12: {
                    minutes: null,
                    hours: null
                },
                p13: null,
                p14: null,
                p15: {
                    minutes: null,
                    hours: null
                },
                sedentary: null,
            },
            form9q: {
                one: null,
                two: null,
                three: null,
                four: null,
                five: null,
                six: null,
                seven: null,
                eight: null,
                nine: null,
            },
            kihon: {
                one: null,
                two: null,
                three: null,
                four: null,
                five: null,
                six: null,
                seven: null,
                eight: null,
                nine: null,
                ten: null,
                eleven: null,
                twelve: null,
                thirteen: null,
                forteen: null,
                fifteen: null,
                sixteen: null,
                seventeen: null,
                eighteen: null,
                nineteen: null,
                twenty: null,
                twentyone: null,
                twentytwo: null,
                twentythree: null,
                twentyfour: null,
                twentyfive: null,
            },
            exhaustion: {
                one: null,
                two: null
            },
            sarcf: {
                one: null,
                two: null,
                three: null,
                four: null,
                five: null,
            },
            behavior: {
                one: null,
                two: null,
                three: null,
                four: null,
                five: null,
                six: null,
                seven: null,
                eight: null,
                nine: null,
                ten: null,
                eleven: null,
                twelve: null,
                thirteen: null,
                fourteen: null,
                fifteen: null,
                sixteen: null,
                seventeen: null,
                eighteen: null,
                nineteen: null,
                twenty: null,
                totalScore: null,
                interpretation: null,
            },
            evaluation: {
                stability: [],
                tug: null,
                tugResult: null,
                chairStand: null,
                ftsts: null,
                ftstsResult: null,
                oneFootStand: null,
                oneFootStandScore: null,
                sideBySide: null,
                semiTandemStand: null,
                tandemStand: null,
                sideBySideScore: null,
                semiTandemStandScore: null,
                tandemStandScore: null,
                balanceResult: null,
                balanceTestScore: null,
                gaitSpeedScore: null,
                ChairStandScore: null,
                leftArmCircumference: null,
                rightArmCircumference: null,
                midArmCircumferenceResult: null,
                leftCalfCircumference: null,
                rightCalfCircumference: null,
                calfCircumferenceResult: null,
                gait1: null,
                gait2: null,
                gait1_6min: null,
                gait2_6min: null,
                gait_6min_avg: null,
                gait1_4min: null,
                gait2_4min: null,
                gait_4min_avg: null,
                gaitResult: null,
                hand: null,
                gripLeft1: null,
                gripLeft2: null,
                gripLeft3: null,
                gripRight1: null,
                gripRight2: null,
                gripRight3: null,
                gripResult: null,
                quadLeft1: null,
                quadLeft2: null,
                quadLeft3: null,
                quadRight1: null,
                quadRight2: null,
                quadRight3: null,
                quadResult: null,
                backScratchLeft1: null,
                backScratchLeft2: null,
                backScratchRight1: null,
                backScratchRight2: null,
                backScratchResult: null,
                sitAndReach1: null,
                sitAndReach2: null,
                sitAndReachResult: null,
                leg: null,
                weight: null,
                height: null,
                muscleMass: null,
                smmIndex: 0,
                asmm: null,
                bmiResult: null,
                waist: null,
                waistResult: null,
                slm: null,
                pbf: null,
                icw: null,
                tbw: null,
                lbm: null,
                fatFreeMass: null,
                note: null,
            },
            vital: {
                systolic: null,
                diastolic: null,
                bpResult: null,
                temperature: null,
                tempResult: null,
                pulse: null,
                pulseResult: null,
                respiration: null,
                rhythm: null,
                respResult: null
            }
        }
    }
}

export default new Vuex.Store({
    state: {
        form: initializeForm(),
        province: null,
        currCode: null,
    },
    getters: {
        smIndex: state => {
            return state.form.record.evaluation.smmIndex
        },
    },
    mutations: {
        resetForm(state) {
            state.form = initializeForm()
            state.form.record.province = state.province.name
            state.currCode = null
        },
        setProvince(state, province) {
            state.province = province
        },
        setFormProvince(state) {
            state.form.province = state.province
        },
        updateUnderlyingDisease (state, disease) {
            let idx = state.form.record.personal.underlyingDiseases.indexOf(disease)
            if (idx == -1) {
                state.form.record.personal.underlyingDiseases.push(disease)
            } else {
                state.form.record.personal.underlyingDiseases.splice(idx, 1)
            }
        },
        initFrail: function(state) {
            state.form.record.frail = {
                fatigue: null,
                resistance: null,
                ambulation: null,
                illness: [],
                weightLoss: null,
                pastYearWeight: null,
                currentWeight: null,
                percentWeightChange: null,
                totalScore: null,
            }
        },
        initBehavior: function(state) {
            state.form.record.behavior = {
                one: null,
                two: null,
                three: null,
                four: null,
                five: null,
                six: null,
                seven: null,
                eight: null,
                nine: null,
                ten: null,
                eleven: null,
                twelve: null,
                thirteen: null,
                fourteen: null,
                fifteen: null,
                sixteen: null,
                seventeen: null,
                eighteen: null,
                nineteen: null,
                twenty: null,
            }
        },
        initFollowUpDiseases: function(state) {
            if (!("followUpDiseases" in state.form.record.personal)) {
                state.form.record.personal.followUpDiseases = []
            }
            state.form.record.personal.followUpDisOther = null;
        },
        updateFrailIllness: function (state, disease) {
            let idx = state.form.record.frail.illness.indexOf(disease)
            if (idx == -1) {
                state.form.record.frail.illness.push(disease)
            } else {
                state.form.record.frail.illness.splice(idx, 1)
            }
        },
        setPastYearADL: function (state, value) {
            state.form.record.pastYearAdlScore = value
        },
        updateFollowUpDiseases: function (state, disease) {
            let idx = state.form.record.personal.followUpDiseases.indexOf(disease)
            if (idx == -1) {
                state.form.record.personal.followUpDiseases.push(disease)
            } else {
                state.form.record.personal.followUpDiseases.splice(idx, 1)
            }
        },
        updateHealthCoverages (state, coverage) {
            let idx = state.form.record.personal.healthCoverages.indexOf(coverage)
            if (idx == -1) {
                state.form.record.personal.healthCoverages.push(coverage)
            } else {
                state.form.record.personal.healthCoverages.splice(idx, 1)
            }
        },
        updateCharlsonDisease (state, params) {
            let idx = state.form.record.charlson.diseases.indexOf(params.disease)
            if (idx == -1) {
                state.form.record.charlson.score += parseInt(params.score)
                state.form.record.charlson.diseases.push(params.disease)
            } else {
                state.form.record.charlson.score -= parseInt(params.score)
                state.form.record.charlson.diseases.splice(idx, 1)
            }
        },
        updateMiniCogItems(state, item) {
            let idx = state.form.record.minicog.items.indexOf(item)
            if (idx == -1) {
                state.form.record.minicog.items.push(item)
                if (item == 'None') {
                    state.form.record.minicog.score = 0
                    return
                }
            } else {
                state.form.record.minicog.items.splice(idx, 1)
                if (item == 'None') {
                    state.form.record.minicog.score = null
                    return
                }
            }
            state.form.record.minicog.score = state.form.record.minicog.items.length
        },
        updateGaitSpeed6Min(state, payload) {
            state.form.record.evaluation.gait_6min_avg = payload
        },
        updateGaitSpeed4Min(state, payload) {
            state.form.record.evaluation.gait_4min_avg = payload
        },
        setMuscleMass(state, payload) {
            state.form.record.evaluation.muscleMass = payload.mass
        },
        setSMMIndex(state, payload) {
            state.form.record.evaluation.smmIndex = payload.index
        },
        setLastUpdate(state) {
            state.form.record.lastUpdate.push({
                datetime: new Date(),
                creator: auth.currentUser.email
            })
        },
        setUpRecord(state, record) {
            state.currCode = record.code
            state.form.record = record
            state.form.record.recordDate = new Date(record.recordDate.toDate())
            if (record.lastUpdate.datetime) {
                state.form.record.lastUpdate.datetime = new Date(record.lastUpdate.datetime.toDate())
            }
        },
        setRecordFollowUpId(state, value) {
            state.form.record.followUpId = value
        },
        setFollowUp(state, value) {
            state.form.followUp = value
            state.form.followUpInfo = {
                createdBy: null,
                province: null,
                recordCode: null,
                createdAt: null,
                updatedAt: null,
                updatedBy: null,
            }
        },
        setFollowUpCreator(state) {
            state.form.followUpInfo.createdBy = auth.currentUser.email
        },
        setFollowUpCreatedAt(state, datetime) {
            state.form.followUpInfo.createdAt = datetime
        },
        setFollowUpUpdatedAt(state, datetime) {
            state.form.followUpInfo.updatedAt = datetime
        },
        setFollowUpUpdater(state) {
            state.form.followUpInfo.updatedBy = auth.currentUser.email
        },
        setFollowUpRecordCode(state) {
            state.form.followUpInfo.recordCode = state.form.record.code
        },
        setFollowUpProvince(state) {
            state.form.followUpInfo.province = state.form.record.province
        },
        setFollowUpRecordId(state, followUpId) {
            state.form.record.followUpId = followUpId
        },
        setCreator(state) {
            state.form.record.creator = auth.currentUser.email
        },
        setClockFileName(state, fileName) {
            state.form.record.clock.file = fileName
        },
        setCurrCode(state, code) {
            state.currCode = code
        },
    },
    actions: {
        setRecordFollowUpId({commit}, payload) {
            commit('setRecordFollowUpId', payload)
        },
        addFollowUpRecord({commit}) {
            commit('setFollowUpCreator')
            commit('setFollowUpUpdater')
            commit('setFollowUpProvince')
            commit('setFollowUpRecordCode')
            commit('setFollowUpUpdatedAt', new Date())
            commit('setFollowUpCreatedAt', new Date())
            commit('initFollowUpDiseases')
            commit('initFrail')
            commit('initBehavior')
        },
        addFollowUpForm({commit, state}) {
            commit('setFollowUpCreator')
            commit('setFollowUpUpdater')
            commit('setFollowUpProvince')
            commit('setFollowUpRecordCode')
            commit('setFollowUpUpdatedAt', new Date())
            commit('setFollowUpCreatedAt', new Date())
            followups.add(state.form.followUpInfo).then(docRef => {
                commit('setFollowUpRecordId', docRef.id)
            })
            commit('initFollowUpDiseases')
            commit('initFrail')
            commit('initBehavior')
        },
        async saveFollowUpForm({commit, state}) {
            const loadingComponent = LoadingProgrammatic.open({ container: null })
            records.where('followUpId', '==', state.form.record.followUpId)
                .get().then((snapshot) => {
                // if the follow-up record does not exist, add it
                if (snapshot.empty) {
                    commit('setCreator')
                    records.add(state.form.record).then(() => {
                        ToastProgrammatic.open({
                            type: 'is-success',
                            message: 'บันทึกข้อมูลเรียบร้อยแล้ว'
                        })
                    }).catch((error) => {
                        ToastProgrammatic.open({
                            type: 'is-danger',
                            message: error.toString()
                        })
                    })
                } else {
                    let formData = snapshot.docs[0]
                    records.doc(formData.id).set(state.form.record).then(() => {
                        ToastProgrammatic.open({
                            type: 'is-success',
                            message: 'บันทึกข้อมูลเรียบร้อยแล้ว'
                        })
                        //TODO: set current code
                    }).catch((error) => {
                        ToastProgrammatic.open({
                            type: 'is-danger',
                            message: error.toString()
                        })
                    })
                }
                loadingComponent.close()
            })
        },
        saveForm({commit, state}) {
            commit('setLastUpdate')
            commit('setFormProvince')
            const loadingComponent = LoadingProgrammatic.open({ container: null })
            records.where('code', '==', state.form.record.code)
                .where('province', '==', state.form.record.province)
                .get().then((snapshot) => {
                    // if code does not exist, add the record and set the current code to
                    // the record's one.
                if (snapshot.empty) {
                    if (state.form.record.code != null) {
                        commit('setCreator')
                        records.add(state.form.record).then(()=>{
                            ToastProgrammatic.open({
                                type: 'is-success',
                                message: 'บันทึกข้อมูลเรียบร้อยแล้ว'
                            })
                            commit('setCurrCode', state.form.record.code)
                        }).catch((error)=>{
                            ToastProgrammatic.open({
                                type: 'is-danger',
                                message: error.toString()
                            })
                        })
                    }
                } else {
                    // if code exists, but not the same as current code or the current code is null
                    // confirm whether the user wants to overwrite the record.
                    let formData = snapshot.docs[0]
                    if (state.currCode !== state.form.record.code || state.currCode == null) {
                        DialogProgrammatic.confirm({
                            title: 'รหัสซ้ำในพื้นที่',
                            message: 'ท่านแน่ใจว่าจะบันทึกทับรายการที่มีอยู่แล้วหรือไม่',
                            hasIcon: true,
                            iconPack: 'fa',
                            icon: 'times-circle',
                            type: 'is-danger',
                            onConfirm: ()=>{
                                records.doc(formData.id).set(state.form.record).then(()=>{
                                    ToastProgrammatic.open({
                                        type: 'is-success',
                                        message: 'บันทึกข้อมูลเรียบร้อยแล้ว'
                                    })
                                    //TODO: set current code
                                }).catch((error)=>{
                                    ToastProgrammatic.open({
                                        type: 'is-danger',
                                        message: error.toString()
                                    })
                                })
                            }
                        })
                    } else {
                        // if the code exists, but it is the same as the current code,
                        // update the record. No need to confirm.
                        records.doc(formData.id).set(state.form.record).then(()=>{
                            ToastProgrammatic.open({
                                type: 'is-success',
                                message: 'บันทึกข้อมูลเรียบร้อยแล้ว'
                            })
                        }).catch((error)=>{
                            ToastProgrammatic.open({
                                type: 'is-danger',
                                message: error.toString()
                            })
                        })
                    }
                }
                loadingComponent.close()
            })
        },
        setRecord({commit}, record) {
            commit('setUpRecord', record)
        },
        toggleFollowUpMode({commit}, value) {
            commit('setFollowUp', value)
        },
        initializeFollowUpForm({commit}) {
            commit('initFollowUpDiseases')
        },
        setPastYearADL({commit}, value) {
            commit('setPastYearADL', value)
        },
        updateSMMIndex({ commit, state }, payload) {
            if (state.form.record.personal.height > 0) {
                let index = payload / (state.form.record.personal.height * 0.01)**2
                commit('setMuscleMass', { mass: payload})
                commit('setSMMIndex', { index: index })
            }
        },
        updateGaitSpeed6Min({commit}, payload) {
            commit('updateGaitSpeed6Min', payload)
        },
        updateGaitSpeed4Min({commit}, payload) {
            commit('updateGaitSpeed4Min', payload)
        }
    }
})