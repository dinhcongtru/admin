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
                      >Tên Nhân Viên</label
                    >
                    <argon-input type="text" placeholder="Tên Nhân Viên..." :value="employee.fullName" />
                  </div>
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label"
                      >Email Nhân Viên</label
                    >
                    <argon-input type="email" placeholder="Email Nhân Viên..." :value="employee.email" />
                  </div>
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label"
                      >Số Điện Thoại</label
                    >
                    <argon-input type="text" placeholder="Số Điện Thoại..." :value="employee.phone" />
                  </div>
                  
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label"
                      >Chức Vụ</label
                    >
                    <argon-input type="text" placeholder="Chức Vụ..." :value="employee.designation" />
                  </div>
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label"
                      >Giới Tính</label
                    >
                    <argon-input type="text" placeholder="Giới Tính..." :value="employee.gender" />
                  </div>
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label"
                      >Ngày SINH</label
                    >
                    <DxDateBox
                        :value="employee.dateOfBirth"
                        :input-attr="{ 'aria-label': 'Date' }"
                        type="date"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="example-text-input" class="form-control-label"
                      >Địa Chỉ</label
                    >
                    <argon-textarea type="text" placeholder="Địa chỉ..." :value="employee.address" />
                  </div>
                  
                </div>
              </div>
              <div class="btn_bottom">
                    <a>
                      <argon-button color="success" size="md" variant="contained">Lưu</argon-button>
                    </a>
                 
                   <a href="/staff-manage">
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
  import DxDateBox from 'devextreme-vue/date-box';
  import ArgonTextarea from "@/components/ArgonTextarea.vue";
  export default {
  name:"EmployeeInfo",
  components:{ArgonInput,ArgonButton,DxDateBox,ArgonTextarea},
  async created(){
    //call api load record
  
  },
  data(){
    return{
       now:"12/10/2023",
      title: this.$route.name,
      employee:{},
    }
  },
  methods :{
    
  }
  
  }
  </script>
  <style scoped>
  .row-wraper {
    position: absolute;
      top: 38%;
      left: 50%;
      width: 50%;
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