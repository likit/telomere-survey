<template>
  <section class="section">
    <Navigation></Navigation>
    <br>
    <div class="container">
      <div class="has-text-centered">
        <h1 class="title">ณ จังหวัด{{ $store.state.province.name }}</h1>
        <div class="buttons is-centered">
          <button @click="addRecord" class="button is-light is-success">
            <span class="icon">
              <i class="fas fa-plus"></i>
            </span>
            <span>เพิ่มรายการ</span>
          </button>
          <button @click="fetch(query)" class="button is-light">
            <span class="icon">
              <i class="fas fa-redo-alt"></i>
            </span>
            <span>refresh</span>
          </button>
        </div>
      </div>
      <b-field label="Filter">
        <b-radio native-value="all" v-model="createdBy">ทั้งหมด</b-radio>
        <b-radio native-value="yours" v-model="createdBy">สร้างโดยฉัน</b-radio>
      </b-field>
      <b-table :data="items"
               :paginated="true"
               :default-sort="['code', 'firstname']"
               :debounce-search="500">
        <b-table-column field="code" searchable label="Code" sortable v-slot="props">
          {{ props.row.code }}
        </b-table-column>
        <b-table-column field="firstname" searchable label="First Name" sortable v-slot="props">
          {{ props.row.firstname }}
        </b-table-column>
        <b-table-column field="lastname" searchable label="Last Name" sortable v-slot="props">
          {{ props.row.lastname }}
        </b-table-column>
        <b-table-column field="province" label="Province" sortable v-slot="props">
          {{ props.row.province }}
        </b-table-column>
        <b-table-column field="creator" label="Creator" sortable v-slot="props">
          {{ props.row.creator }}
        </b-table-column>
        <b-table-column sortable v-slot="props">
          <div class="buttons">
            <button @click="setRecord(props.row.code)" class="button is-primary is-light">
            <span class="icon">
              <i class="fas fa-pencil-alt"></i>
            </span>
              <span>แก้ไข</span>
            </button>
            <button @click="deleteRecord(props.row.id)" class="button is-danger is-light">
            <span class="icon">
              <i class="fas fa-trash"></i>
            </span>
              <span>ลบรายการ</span>
            </button>
          </div>
        </b-table-column>
      </b-table>
    </div>
  </section>
</template>

<script>
import Navigation from "@/components/navigation";
import {records} from '../firebase';
import {mapState} from "vuex";

export default {
  name: "RecordSearch",
  components: {Navigation},
  data() {
    return {
      query: '',
      createdBy: "all",
      items: [],
    }
  },
  computed: {
    ...mapState(['province']),
  },
  methods: {
    addRecord: function() {
      this.$store.dispatch('toggleFollowUpMode', false)
      this.$store.commit('resetForm')
      this.$router.push({name: 'FormMain'})
    },
    setRecord: function(code) {
      let self = this
      this.$store.dispatch('toggleFollowUpMode', false)
      records.where('code', '==', code)
          .where('followUpId', '==', null)
          .where('province', '==', self.province.name)
          .get().then((snapshot) => {
            if (!snapshot.empty) {
              let d = snapshot.docs[0]
              console.log(d.followUpId)
              this.$store.dispatch('setRecord', d.data()).then(()=>{
                self.$router.push({ name: 'FormMain'})
              })
            }
      })
    },
    setFollowUpRecord: function(code) {
      let self = this
      self.$store.dispatch('setNewFollowUp')
      records.where('code', '==', code)
          .where('province', '==', self.province.name)
          .get().then((snapshot) => {
            if (!snapshot.empty) {
              let d = snapshot.docs[0]
              this.$store.dispatch('setRecord', d.data()).then(()=>{
                self.$store.dispatch('addFollowUpForm')
                self.$router.push({ name: 'FollowUpMain'})
              })
            }
          })
    },
    deleteRecord: function(id) {
      this.$buefy.dialog.confirm({
        type: 'is-warning',
        title: 'ยืนยันการลบรายการ',
        message: 'ท่านต้องการลบรายการนี้หรือไม่',
        hasIcon: true,
        icon: 'times-circle',
        iconPack: 'fa',
        ariaRole: 'alertdialog',
        ariaModal: true,
        onConfirm: ()=>{
          records.doc(id).delete().then(()=> {
            this.$buefy.toast.open({
              message: 'The record has been deleted.',
              type: 'is-success'})
            this.items = this.items.filter((d)=>{
              return d.id != id
            })
          }).catch(()=>this.$buefy.toast.open({
            message: 'Oops, the error occurred.',
            type: 'is-danger'
          }))
        }
      })
    },
    fetchAll: function() {
      let self = this
      records.where('province', '==', self.$store.state.province.name)
          .get()
          .then((snapshot) => {
            snapshot.forEach((r) => {
              let d = r.data()
              if (!("followUpId" in d) || d.followUpId == null || d.followUpId === '') {
                self.items.push({
                  id: r.id,
                  code: d.code,
                  firstname: d.personal.firstname,
                  lastname: d.personal.lastname,
                  province: d.province,
                  updatedAt: d.lastUpdate.datetime,
                  creator: d.creator,
                })
              }
            })
          })
    },
    fetch: function(code) {
      let self = this
      self.items.splice(0)
      if (code == '') {
        self.fetchAll()
      } else {
        records.where('province', '==', self.$store.state.province.name)
            .where('code', '==', code).get()
            .then((snapshot) => {
              snapshot.forEach((r) => {
                let d = r.data()
                if (!("followUpId" in d) || d.followUpId == null || d.followUpId === '') {
                  self.items.push({
                    id: r.id,
                    code: d.code,
                    firstname: d.personal.firstname,
                    lastname: d.personal.lastname,
                    province: d.province,
                    updatedAt: d.lastUpdate.datetime,
                    creator: d.creator,
                  })
                }
              })
            })
      }
    },
  },
  mounted() {
    if (this.$route.params.query) {
      this.query = this.$route.params.query
    }
    this.fetch(this.query)
  }
}
</script>

<style scoped>

</style>