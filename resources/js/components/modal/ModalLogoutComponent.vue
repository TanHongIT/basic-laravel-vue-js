<template>
  <button class="dropdown-item" @click.prevent="logout">Log out</button>
</template>
<script>
export default {
  methods: {
    logout() {
      axios.post("/logout").then((response) => {});+
    },
  },
};
</script>
