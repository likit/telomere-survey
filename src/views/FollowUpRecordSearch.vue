<template>
  <section class="section">
    <Navigation></Navigation>
    <br>
    <div class="container">
      <div class="has-text-centered">
        <h1 class="title">รายการข้อมูลติดตาม</h1>
        <h1 class="subtitle">จังหวัด{{ $store.state.province.name }}</h1>
        <div class="buttons is-centered">
          <button @click="setFollowUpRecord" class="button is-light is-success">
            <span class="icon">
              <i class="fas fa-plus"></i>
            </span>
            <span>เพิ่มรายการ</span>
          </button>
          <button @click="fetch(code)" class="button is-light">
            <span class="icon">
              <i class="fas fa-redo-alt"></i>
            </span>
            <span>refresh</span>
          </button>
        </div>
      </div>
      <b-table :data="items"
               :paginated="true"
               :default-sort="['code', 'firstname']"
               :debounce-search="1000">
        <b-table-column field="code" label="Code" sortable v-slot="props">
          {{ props.row.code }}
        </b-table-column>
        <b-table-column field="createdAt" label="Created At" sortable v-slot="props">
          {{ props.row.createdAt }}
        </b-table-column>
        <b-table-column field="updatedAt" label="Last Update" sortable v-slot="props">
          {{ props.row.updatedAt }}
        </b-table-column>
        <b-table-column field="creator" label="Creator" sortable v-slot="props">
          {{ props.row.creator }}
        </b-table-column>
        <b-table-column sortable v-slot="props">
          <div class="buttons">
            <button @click="setRecord(props.row.id)" class="button is-primary is-light">
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
import {records, followups} from '../firebase';
import {mapState} from "vuex";

export default {
  name: "FollowUpRecordSearch",
  components: {Navigation},
  data() {
    return {
      items: [],
      code: null,
    }
  },
  computed: {
    ...mapState(['province']),
  },
  methods: {
    setRecord: function(id) {
      let self = this
      self.$store.dispatch('toggleFollowUpMode', true)
      records.where('followUpId', '==', id)
          .where('province', '==', self.province.name)
          .get().then((snapshot) => {
            if (!snapshot.empty) {
              let d = snapshot.docs[0]
              this.$store.dispatch('setRecord', d.data()).then(()=>{
                self.$router.push({ name: 'FollowUpMain'})
              })
            } else {
              records.where('code', '==', self.code)
                  .where('province', '==', self.province.name)
                  .get().then((snapshot) => {
                if (!snapshot.empty) {
                  let d = snapshot.docs[0]
                  this.$store.dispatch('setRecord', d.data()).then(()=>{
                    self.$store.dispatch('addFollowUpRecord')
                    self.$store.dispatch('setRecordFollowUpId', id)
                    self.$router.push({ name: 'FollowUpMain'})
                  })
                }
              })
            }
      })
    },
    setFollowUpRecord: function() {
      let self = this
      self.$store.dispatch('toggleFollowUpMode', true)
      records.where('code', '==', self.code)
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
      let self = this
      self.$buefy.dialog.confirm({
        type: 'is-warning',
        title: 'ยืนยันการลบรายการ',
        message: 'ท่านต้องการลบรายการนี้หรือไม่',
        hasIcon: true,
        icon: 'times-circle',
        iconPack: 'fa',
        ariaRole: 'alertdialog',
        ariaModal: true,
        onConfirm: ()=>{
          records.where('followUpId', '==', id).get().then((snapshot)=>{
            if (!snapshot.empty) {
              let doc = snapshot.docs[0]
              records.doc(doc.id).delete().then(()=> {
                self.$buefy.toast.open({
                  message: 'The record has been deleted.',
                  type: 'is-success'})
              }).catch(()=>self.$buefy.toast.open({
                message: 'Oops, the error occurred.',
                type: 'is-danger'
              }))
            }
          })
          followups.doc(id).delete().then(() => {
            self.items = self.items.filter((d)=>{
              return d.id != id
            })
          })
        }
      })
    },
    fetch: function(code) {
      let self = this
      self.items.splice(0)
      followups.where('province', '==', self.$store.state.province.name)
          .where('recordCode', '==', code).get()
          .then((snapshot) => {
            snapshot.forEach((r) => {
              let d = r.data()
              self.items.push({
                id: r.id,
                code: d.recordCode,
                updatedAt: d.updatedAt.toDate().toLocaleString(),
                creator: d.createdBy,
                createdAt: d.createdAt.toDate().toLocaleString(),
              })
            })
          })
    },
  },
  mounted() {
    if (this.$route.params.query) {
      this.code = this.$route.params.query
    }
    this.fetch(this.code)
  }
}
</script>

<style scoped>

</style>