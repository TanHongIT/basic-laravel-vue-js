<template>
  <div>
    <NavbarAuthLogin></NavbarAuthLogin>
    <div class="wrapper wrapper-full-page">
      <div class="page-header login-page header-filter" filter-color="black">
        <!--   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " -->
        <div class="container">
          <!-- <div
            class="alert alert-rose alert-with-icon"
            data-notify="container"
            v-if="error"
          >
            <i class="material-icons" data-notify="icon">notifications</i>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <i class="material-icons">close</i>
            </button>
            <span data-notify="message"
              >There was an error, unable to sign in with those
              credentials.</span
            >
          </div> -->
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
              <form class="form" method="POST" @submit.prevent="login">
                <div class="card card-login card-hidden">
                  <div class="card-header card-header-rose text-center">
                    <h4 class="card-title">Login</h4>
                    <div class="social-line">
                      <a
                        href="#pablo"
                        class="btn btn-just-icon btn-link btn-white"
                      >
                        <i class="fa fa-facebook-square"></i>
                      </a>
                      <a
                        href="#pablo"
                        class="btn btn-just-icon btn-link btn-white"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a
                        href="#pablo"
                        class="btn btn-just-icon btn-link btn-white"
                      >
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="card-description text-center">Or Be Classical</p>
                    <span class="bmd-form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">face</i>
                          </span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First Name..."
                        />
                      </div>
                    </span>
                    <span class="bmd-form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">email</i>
                          </span>
                        </div>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email..."
                          v-model="email"
                          required
                        />
                      </div>
                    </span>
                    <span class="bmd-form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">lock_outline</i>
                          </span>
                        </div>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password..."
                          v-model="password"
                          required
                        />
                      </div>
                    </span>
                  </div>
                  <div class="card-footer justify-content-center">
                    <button type="submit" class="btn btn-rose btn-link btn-lg">
                      Lets Go
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <FooterAuthLogin />
      </div>
    </div>
  </div>
</template>
<script>
import NavbarAuthLogin from "../layouts/partials/auth/NavbarAuthComponent";
import FooterAuthLogin from "../layouts/partials/auth/FooterAuthComponent";
export default {
  components: { NavbarAuthLogin, FooterAuthLogin },
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    login() {},
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
