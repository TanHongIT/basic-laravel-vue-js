<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md">
          <form id="LoginValidation" action="#" method="">
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
                    name="emailadress"
                  />
                </div>
                <div class="form-group">
                  <label for="examplePasswords" class="bmd-label-floating">
                    Category description:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="examplePasswords"
                    name="password"
                  />
                </div>
                <div class="category form-category">* Required fields</div>
              </div>
              <div class="card-footer ml-auto mr-auto">
                <button type="submit" class="btn btn-rose">Add</button>
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
  mounted() {
    console.log("Add New Category Component mounted");
  },
};
</script>
