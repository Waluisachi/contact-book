<template>
  <div class="card card-body mt-4">
    <h3>Edit users</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>First Name</label>
        <input v-model="form.firstName" class="form-control" required />
      </div>

      <div class="form-group">
        <label>Last Name</label>
        <input v-model="form.lastName" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getContact, updateContact } from '@/firebase'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const contactId = computed(() => route.params.id)
    const form = reactive({ firstName: '', lastName: '', email: '' })
    onMounted(async () => {
      const contact = await getContact(contactId.value)
      // console.log(contact, contactId.value)
      form.firstName = contact.firstName
      form.lastName = contact.lastName
      form.email = contact.email
    })
    const update = async () => {
      await updateContact(contactId.value, { ...form })
      router.push('/')
      form.firstName = ''
      form.lastName = ''
      form.email = ''
    }
    return { form, update }
  }
}
</script>
