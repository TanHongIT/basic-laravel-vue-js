<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md" @click.prevent="checkValidateCategory()">
          <form id="LoginValidation" role="form">
            <div class="card">
              <div class="card-header card-header-rose card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">add</i>
                </div>
                <h4 class="card-title">Add New Category</h4>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <label for="exampleEmails" class="bmd-label-floating">
                    *Category name:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleEmails"
                    required="true"
                    v-model="form.cat_name"
                    name="cat_name"
                    :class="{ 'is-invalid': form.errors.has('cat_name') }"
                  />
                  <has-error :form="form" field="cat_name"></has-error>
                </div>
                <div class="form-group">
                  <label for="examplePasswords" class="bmd-label-floating">
                    Category description:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="examplePasswords"
                    v-model="form.cat_description"
                    name="cat_description"
                    :class="{
                      'is-invalid': form.errors.has('cat_description'),
                    }"
                  />
                  <has-error :form="form" field="cat_description"></has-error>
                </div>
                <div class="category form-category">* Required fields</div>
              </div>
              <div class="card-footer ml-auto mr-auto">
                <button
                  @click.prevent="addCategory()"
                  type="submit"
                  class="btn btn-rose"
                >
                  Submit Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
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
    //check validate form add category
    checkValidateCategory() {
      this.form
        .post("/check-category-validate")
        .then((response) => {
          console.log("Check OK");
        })
        .catch(() => {});
    },
    addCategory() {
      this.form
        .post("/admin/add-category")
        .then((response) => {
          this.$router.push("/category-list");
        })
        .catch(() => {});
    },
  },
  mounted() {
    console.log("Add New Category Component mounted");
  },
};
</script>
