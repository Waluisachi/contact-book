<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <!-- <th scope="col">#</th> -->
          <th scope="col">Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>

        </tr>
      </thead>
      <tbody>
          <tr v-for="{ id, firstName, lastName} in contact" :key="id">
          <td>
            <router-link :to="`/contact/${id}`">
            {{ firstName }} {{ lastName }}
            </router-link>
          </td>

          <td>
            <router-link :to="`/edit/${id}`">
              <button type="submit" class="btn btn-primary btn-sm me-2">Edit</button>
            </router-link>
           </td>
          <td> <button @click="deleteContact(id)" class="btn btn-danger btn-sm">Delete</button> </td>
        </tr>
      </tbody>
    </table>
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
      console.log(contact.email)
    })
    return {contact};
  },

}

</script>

<style scoped>
  .card {
    margin: auto;
    align-items: center;
    justify-content: center;
  }
</style>
