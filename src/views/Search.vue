<template >
  <div class="card search">
    <form class="form" @submit.prevent="onSubmitform">
      <div class="input-group">
          <div class="form-outline">
            <label class="form-label" for="form1">Search</label>
            <input type="search" id="form1" class="form-control" />

          </div>

        </div>
        <button type="submit" class="btn btn-primary btn-sm mt-2">Search </button>
    </form>
  </div>

  <div class="container">
    <div class="card mt-4">
      <table class="table m-0">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>

            <th scope="col">Edit</th>
            <th scope="col">Delete</th>

          </tr>
        </thead>
        <tbody>
            <tr v-for="{ id, firstName, lastName, email} in contact" :key="id">
            <td>
              <router-link :to="`/contact/${id}`">
              {{ firstName }} {{ lastName }}
              </router-link>
            </td>
            <td>{{ email }}</td>

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
  </div>
</template>

<script>
import { searchContact } from '@/firebase';
import { reactive } from "vue";
let contact;
  export default {
    setup() {
      const form = reactive({ "name": "" })


      const onSubmitform = async () => {

       contact = await searchContact({ ...form });
       console.log(contact);
        form.name = ""
    }
    return { form, onSubmitform ,contact}
  }
}
</script>


<style scoped>
  .card {

    margin: auto;
    align-items: center;
    justify-content: center;
  }

  .search{
    min-height: 300px;
  }
</style>
