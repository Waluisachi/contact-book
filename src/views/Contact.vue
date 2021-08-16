<template>
  <div class="">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush" v-for="{ id, firstName, lastName, email} in contact" :key="id">
        <li  class="list-group-item">First Name: {{ firstName }}</li>
        <li class="list-group-item">Last Name: {{ lastName }}</li>
        <li class="list-group-item">Email: {{ email }}</li>
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
      console.log(contact, contactId.value)
    })

    return { contact }
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
