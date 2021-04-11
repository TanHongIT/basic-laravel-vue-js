<template></template>
<script>
export default {
  name: "Edit",
  data() {
    return {
      form: new Form({
        cat_name: "",
        cat_description: "",
      }),
    };
  },
  methods: {
    updateCategory() {
      this.form
        .post(`/update-category/${this.$route.params.categoryid}`)
        .then((response) => {
          this.$router.push("/category-list");
          toast({
            type: "success",
            title: "Category Updated successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>
