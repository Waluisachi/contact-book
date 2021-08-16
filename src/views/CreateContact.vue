<template>
  <div class="container">
    <CreateContact />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateContact from '@/components/CreateContact.vue'

export default {
  name: 'Home',
  components: {
    CreateContact
  }
}
</script>
