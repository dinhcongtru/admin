<template>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder text-center">Đăng Nhập</h4>
                  <p class="mb-0 text-center">Nhập Email Mật Khẩu Để Đăng Nhập</p>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <argon-input type="email" v-model="user.email" placeholder="Email" size="lg" />
                    </div>
                    <div class="mb-3">
                      <argon-input type="password" placeholder="Mật Khẩu" v-model="user.password" size="lg" />
                    </div>
                    <argon-switch id="rememberMe">Nhớ Mật Khẩu</argon-switch>

                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                        @click.prevent="SingIn"
                      >Đăng Nhập</argon-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                   Bạn có tài khoản chưa?
                    <a
                      href="/signup"
                      class="text-success text-gradient font-weight-bold"
                    >Đăng Ký</a>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="background-image: url('https://pos.nvncdn.com/be3159-662/bn/20231219_VNv7koak.gif');
          background-size: cover;"
              >
                <span class="mask bg-gradient-success opacity-6"></span>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];
import store from '@/store';
import axios from 'axios'
export default {
  name: "signin",
  components: {
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
  },
  methods:{
    SingIn(){
      if(Object.keys(this.user).length > 0){
        this.user.fullName = "string";
        axios.post(`http://localhost:5041/PostLoginDetails`,this.user).then(res => {
          if(res.status == 200 ){
            store.commit("changeLogin");
            window.location.href = "/"
          }
        })
      }
    }
  },
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
<style scoped>

.position-relative span {
  background: none;
}
</style>
