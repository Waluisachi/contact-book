<template >
  <div class="container">
    <EditContact />
  </div>
</template>

<script>
  import Contacts from '@/components/Contacts.vue';

  export default {
    name: "Contacts",
    component: {
      Contacts,
    },
  }
</script>
