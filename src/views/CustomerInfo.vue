<template>
    <main>
      <div class="container-fluid">
        <div
          class="page-header min-height-300"
          style="
            background-image: url('https://pos.nvncdn.com/be3159-662/bn/20231219_VNv7koak.gif');
            margin-right: -24px;
            margin-left: -5%;
          "
        >
          <span class="mask bg-gradient-success opacity-6"></span>
        </div>
      </div>
      <div class="py-4 container-fluid">
        <div class="row row-wraper">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header pb-0">
                <div class="d-flex align-items-center">
                  <p class="mb-0">{{ title }}</p>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label"
                      >Tên Khách Hàng</label
                    >
                    <argon-input type="text" placeholder="Tên Khách Hàng..." v-model="customer.fullName" />
                  </div>
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label"
                      >Email Khách Hàng</label
                    >
                    <argon-input type="email" placeholder="Email Khách Hàng..." v-model="customer.email" />
                  </div>
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label"
                      >Số Điện Thoại</label
                    >
                    <argon-input type="text" placeholder="Số Điện Thoại..." v-model="customer.phone" />
                  </div>
                </div>
              </div>
              <div class="btn_bottom">
                    <a>
                      <argon-button color="success" size="md" variant="contained">Lưu</argon-button>
                    </a>
                 
                   <a href="/customer-manage">
                    <argon-button color="success" size="md" variant="outline" >Trở Về</argon-button>
                   </a>
                  
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </main>
  </template>
  <script>
  // import ProfileCard from "./components/ProfileCard.vue";
  import ArgonInput from "@/components/ArgonInput.vue";
  import ArgonButton from "@/components/ArgonButton.vue";
  import { RepositoryFactory } from "@/Repository/RepositoryFactory";
  const CustomerFactory = RepositoryFactory.get("Customers");
  export default {
  name:"CustomerInfo",
  components:{ArgonInput,ArgonButton},
   created(){
    //call api load record
    this.GetByID();
  },
  data(){
    return{
      title: this.$route.name,
      customer:{},
    }
  },
  methods :{
    GetByID(){
      CustomerFactory.GetByID(this.$store.state.cusCode).then(res => {
        if(res.status == 200) {
          this.customer = res.data;
        
        }
      })
    }
  }
  
  }
  </script>
  <style scoped>
  .row-wraper {
    position: absolute;
      top: 38%;
      left: 50%;
      width: 60%;
      transform: translateX(-50%);
  }
  .btn_bottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 24px;
    margin-bottom: 24px;
  }
  .btn_bottom a {
    margin-left: 20px;
    width: 120px;
  }
  .btn_bottom button {
    width: 100%;
  }
  .mb-0 {
    font-size: 20px;
      font-weight: 600;
  }
  .form-control-label {
    font-size: 16px;
  }
  .dx-texteditor.dx-editor-outlined{
    height: 39px;
    border-radius: 8px;
  }
  </style>