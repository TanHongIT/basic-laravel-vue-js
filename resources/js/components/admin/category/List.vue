<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <router-link to="/add-category" class="btn btn-success">
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
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Date</th>
                      <th class="disabled-sorting text-right">Actions</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th class="text-right">Actions</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td class="text-right">
                        <a
                          href="#"
                          class="btn btn-link btn-info btn-just-icon like"
                          ><i class="material-icons">favorite</i></a
                        >
                        <a
                          href="#"
                          class="btn btn-link btn-warning btn-just-icon edit"
                          ><i class="material-icons">dvr</i></a
                        >
                        <a
                          href="#"
                          class="btn btn-link btn-danger btn-just-icon remove"
                          ><i class="material-icons">close</i></a
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
  mounted() {
    console.log("List Category Component mounted");
    $(document).ready(function () {
      $("#datatables").DataTable({
        pagingType: "full_numbers",
        lengthMenu: [
          [10, 25, 50, -1],
          [10, 25, 50, "All"],
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search records",
        },
      });

      var table = $("#datatable").DataTable();

      // Edit record
      table.on("click", ".edit", function () {
        $tr = $(this).closest("tr");
        var data = table.row($tr).data();
        alert(
          "You press on Row: " +
            data[0] +
            " " +
            data[1] +
            " " +
            data[2] +
            "'s row."
        );
      });

      // Delete a record
      table.on("click", ".remove", function (e) {
        $tr = $(this).closest("tr");
        table.row($tr).remove().draw();
        e.preventDefault();
      });

      //Like record
      table.on("click", ".like", function () {
        alert("You clicked on Like button");
      });
    });
  },
};
</script>

<style scoped>
</style>