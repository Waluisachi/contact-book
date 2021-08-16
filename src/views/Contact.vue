<template>
  <div class="">
    <div class="card" style="width: 18rem;" >
      <ul class="list-group list-group-flush"  >
        <li  class="list-group-item">First Name: {{ filteredData[0].firstName }}</li>
        <li class="list-group-item">Last Name: {{ filteredData[0].lastName }}</li>
        <li class="list-group-item">Email: {{ filteredData[0].email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {  computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getContact } from '@/firebase'
let contact;

export default {

  setup() {
    const route = useRoute()
    const contactId = computed(() => route.params.id)
    onMounted(async () => {
    contact = await getContact(contactId.value)
    contact.id= contactId.value;
      console.log(contact)
    })
  },

  data(){
    return {
       filteredData: contact
    }
  }

}

</script>

<style scoped>
  .card {
    margin: auto;
    align-items: center;
    justify-content: center;
  }
</style>
