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
          <tr v-for="{ id, firstName, lastName} in contacts" :key="id">
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
import { useLoadcontacts, deleteContact } from "@/firebase";

  export default {
    setup() {
      const contacts = useLoadcontacts();
      return { contacts, deleteContact}
    },
    name: "EditContacts"
  }
</script>
