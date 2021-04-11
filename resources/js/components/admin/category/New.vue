<template></template>
<script>
export default {
  name: "New",
  data() {
    return {
      form: new Form({
        cat_name: "",
        cat_description: "",
      }),
    };
  },
  methods: {
    addCategory() {
      this.form
        .post("/add-category")
        .then((response) => {
          this.$router.push("/category-list");
        })
        .catch(() => {});
    },
  },
};
</script>
