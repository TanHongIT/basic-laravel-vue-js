<template></template>
<script>
export default {
  name: "List",
  data() {
    return {
      categoryItem: [],
    };
  },
  methods: {},
  computed: {
    getallCategory() {
      return this.$store.getters.getCategory;
    },
  },
  mounted() {
    this.$store.dispatch("allCategory");
  },
};
</script>
