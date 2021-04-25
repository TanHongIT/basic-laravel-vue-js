<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <router-link to="/admin/category/add" class="btn btn-success">
            <span class="btn-label">
              <i class="material-icons">add</i>
            </span>
            Add New Category
            <div class="ripple-container"></div>
          </router-link>
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">assignment</i>
              </div>
              <h4 class="card-title">Category List</h4>
            </div>
            <div class="card-body">
              <div class="toolbar">
                <!--        Here you can write extra buttons/actions for the toolbar              -->
              </div>
              <div class="material-datatables">
                <table
                  id="datatables"
                  class="table table-striped table-no-bordered table-hover"
                  cellspacing="0"
                  width="100%"
                  style="width: 100%"
                >
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>ID</th>
                      <th>Caagory Name</th>
                      <th>Caagory Description</th>
                      <th>Create Date</th>
                      <th class="disabled-sorting text-right">Actions</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>STT</th>
                      <th>ID</th>
                      <th>Caagory Name</th>
                      <th>Caagory Description</th>
                      <th>Create Date</th>
                      <th class="text-right">Actions</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr
                      v-for="(category, index) in getallCategory"
                      :key="category.id"
                    >
                      <td>{{ index + 1 }}</td>
                      <td>{{ category.id }}</td>
                      <td>{{ category.cat_name }}</td>
                      <td>{{ category.cat_description }}</td>
                      <td>{{ category.created_at | time_format }}</td>
                      <td class="text-right">
                        <router-link
                          :to="`/admin/category/edit/${category.id}`"
                          class="btn btn-link btn-info btn-just-icon like"
                          ><i class="material-icons">edit</i></router-link
                        >
                        <a
                          href="#"
                          class="btn btn-link btn-warning btn-just-icon edit"
                          ><i class="material-icons">dvr</i></a
                        >
                        <a
                          @click.prevent="deletecategory(category.id)"
                          class="btn btn-link btn-danger btn-just-icon remove"
                          ><i class="material-icons">delete</i></a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- end content-->
          </div>
          <!--  end card  -->
        </div>
        <!-- end col-md-12 -->
      </div>
      <!-- end row -->
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      status_table: false,
      categories: {},
    };
  },
  mounted() {
    console.log("List Category Component mounted");

    // mount action allCategory store.js
    this.$store.dispatch("allCategory");
  },
  computed: {
    getallCategory() {
      this.status_table = true;
      this.categories = this.$store.getters.getCategory;
      return this.$store.getters.getCategory;
    },
  },
  methods: {
    deletecategory(id) {
      axios
        .delete("/admin/delete-a-category/" + id)
        .then((responses) => {
          this.$store.dispatch("allCategory");
          console.log(responses.data);
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
</style>