<template>
  <div>
    <div class="wrapper">
      <LayoutSideBar></LayoutSideBar>
    </div>
  </div>
</template>

<script>
import LayoutSideBar from "../../views/layouts/partials/LayoutSideBar";
export default {
  components: { LayoutSideBar },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
