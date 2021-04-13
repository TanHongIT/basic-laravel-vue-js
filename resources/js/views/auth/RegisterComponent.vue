<template>
  <div>hi</div>
</template>
<script>
import NavbarAuthLogin from "../layouts/partials/auth/NavbarAuthComponent";

export default {
  components: { NavbarAuthLogin },
  methods: {
    register() {
      var app = this;
      this.$auth.register({
        params: {
          name: app.name,
          email: app.email,
          password: app.password,
        },
        success: function () {
          app.success = true;
        },
        error: function (resp) {
          app.error = true;
          app.errors = resp.response.data.errors;
        },
        redirect: null,
      });
    },
  },
  mounted() {
    console.log("Component mounted.");

    $(document).ready(function () {
      md.checkFullPageBackgroundImage();
      setTimeout(function () {
        // after 1000 ms we add the class animated to the login/register card
        $(".card").removeClass("card-hidden");
      }, 700);
    });
  },
};
</script>
<style scoped>
.page-header {
  background-image: url("/assets/img/login.jpg");
  background-size: cover;
  background-position: top center;
}
</style>
