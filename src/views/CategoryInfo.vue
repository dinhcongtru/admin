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
                    >Mã Danh Mục</label>
                  <argon-input placeholder="Mã Danh Mục..." v-model="category.productCategoryCode" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Tên Danh Mục</label
                  >
                  <argon-input type="text" placeholder="Tên Danh Mục..." v-model="category.productCategoryName" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Trạng Thái</label
                  >
                  <argon-input type="text" placeholder="Trạng Thái..." v-model="category.status" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Danh Mục Cha</label
                  >
                  <DxSelectBox
                    v-model="category.parent_category_id"
                    placeholder="Danh Mục Cha..."
                    :search-enabled="true"
                    :data-source="category"
                    :input-attr="{ 'aria-label': 'Product' }"
                    display-expr="productCategoryName"
                    value-expr="productCategoryID"
                  />
                </div>
              </div>
            </div>
            <div class="btn_bottom">
                  <a href="">
                    <argon-button color="success" size="md" variant="contained">Lưu</argon-button>
                  </a>
               
                 <a href="/categoris">
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
import { DxSelectBox } from 'devextreme-vue/select-box';
import { RepositoryFactory } from "@/Repository/RepositoryFactory";
const CategoryFactory = RepositoryFactory.get("Categoris");

export default {
name:"CategoryDetail",
components:{ArgonInput,ArgonButton,DxSelectBox},
async created(){
  //call api load record
  await this.getAllCategory();
},
data(){
  return{
    title: this.$route.name,
    category:{},
  }
},
methods :{
  onClickReturn(){
    console.log("run");
  },
  async getAllCategory() {
    try {
      await CategoryFactory.GetAllCategory().then((res) => {
        if(res.status == 200) {
          this.category = res.data;
        }
      })
    } catch (error) {
      console.log(error);
    }
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