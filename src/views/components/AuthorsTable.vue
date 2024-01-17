<template>
  <div class="card">
    <div class="card-header pb-0">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th v-if="isCount" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">STT</th>
              <th v-if="isImage" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-left">Sản phẩm</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7" :class="header.styleH" v-for="(header,index) in listHeader" :key="index">{{ header.text }}</th>
              <th v-if="isCalc" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Thành Tiền</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7" v-if="isAction">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(object,index) in listData" :key="index">
              <td v-if="isCount">
                <h6 class="mb-0 text-sm">{{ index + 1 }}</h6>
              </td>
              <td v-if="isImage" class="img_thumb">
                <div class="d-flex align-items-center px-2 py-1">
                  <div class="thumb">
                    <img
                    :src="object.listColors[0].imageItem[0].productImageUrl"
                    alt="user2"
                    class="avatar avatar-xxl me-3"
                  />
                  </div>
                  <h6 v-if="isProductList" class="mb-0 text-sm h6" :class="{'h6_product' : isProduct}">{{ object.productName }}</h6>
                  <h6 v-else class="mb-0 text-sm h6" :class="{'h6_product' : isProduct}">{{ `${object.productName} - ${object.productColorName} - ${object.productSizeName}` }}</h6>
                </div>
              </td>
              <!-- render ra column -->
              <td :class="column.classTD" v-for="(column,ind) in listHeader" :key="ind">
                <h6 :class="column.style">{{ showData(object, column) }}</h6>
              </td>
              <td v-if="isCalc">
                <h6 class="mb-0 text-sm">{{ (object.price * object.quantity).toLocaleString("en-US", { minimumFractionDigits: 0,}) }}₫</h6>
              </td>
              <td class="align-middle" v-if="isAction">
                <router-link v-if="isView" :to="`${modules}/detail&key=${index + 1}`" class="badge badge-sm bg-gradient-warning"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  @click="editAction(object)">
                <!-- <a v-if="isView"
                
                :href="`${modules}/detail&key=${index + 1}`"
                  class="badge badge-sm bg-gradient-warning"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  @click="onEdit(object)"
                > -->
                <i class="fa-sharp fa-solid fa-eye"></i>
              </router-link>
              <!-- </a> -->
              <a v-else
                  :href="`${modules}/detail&key=${index + 1}`"
                  class="badge badge-sm bg-gradient-warning"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >
                <i class="fa-solid fa-pen-to-square"></i>
              </a>
                <a v-if="isDelete" @click="deleteAction(object)"
                  class="badge badge-sm bg-gradient-danger"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                ><i class="fa-solid fa-trash"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <ComponentPopUp 
    :isPopUp="isDialog"
    :message="message"
    @close="onClose"
  />
</template>

<script>
import {handleDOB} from '@/methods';
import ComponentPopUp from '@/views/components/ComponentPopUp.vue';
import  store  from '@/store';
export default {
  name: "authors-table",
  components:{ComponentPopUp},
  created(){
      this.modules = this.$route.path;
  },
  data(){
    return{
      isDialog:false,
      modules:null,
      title : this.$route.name,
      message: "Ban Có Muốn Xóa Bản Ghi Không?",
    }
  },
  props:{
    isProductList:{
      type:Boolean,
      default:true
    },
    isDelete:{
      type :Boolean,
      default:true
    },
    isImage : {
      type: Boolean,
      default: false
    },
    isProduct:{
      type:Boolean,
      default:false
    },
    isCalc:{
      type:Boolean,
      default: false,
    },
     //list data render ra bảng
     listData: {
      type: Array, //một mảng các object data
        default: () => [],
        required: true, //bắt buộc có
      },
      //list các header của bảng
      listHeader: {
        type: Array,
        default: () => [
          {
            text: "Cột 1",
            fieldName: "FieldName1",
            style: "text-align-left",
            type: "text",
          },
          {
            text: "Cột 2",
            fieldName: "FieldName2",
            style: "text-align-left",
            type: "input",
          },
          {
            text: "Cột 3",
            fieldName: "FieldName3",
            style: "text-align-left",
            type: "input",
          },
        ],
      },
  
    isCount:{
      type:Boolean,
      default:true
    },
    isView : {
      type: Boolean,
      default: true
    },
    isAction :{
      type:Boolean,
      default: true
    },
  },
  
  methods :{
    
    onClose(){
      let _this = this;
      _this.isDialog = false;
      _this.$emit("reset");
    },
    deleteAction(object) {
      if(this.$route.name == "Đơn Hàng") {
        store.commit("handelSaveOrderCode",object);
      }else if(this.$route.name == "Danh Mục Sản Phẩm"){
        store.commit("handelSaveCateCode",object);
      }else if(this.$route.name == "Sản Phẩm"){
        store.commit("handelSaveProCode",object);
      }else if(this.$route.name == "Khách Hàng"){
        store.commit("handelSaveCusCode",object);
      }else if(this.$route.name == "Nhân Viên"){
        store.commit("handelSaveEmpCode",object);
      }
      this.isDialog = true;
    },
    editAction(object){
      if(this.$route.name == "Đơn Hàng") {
        store.commit("handelSaveOrderCode",object);
      }else if(this.$route.name == "Danh Mục Sản Phẩm"){
        store.commit("handelSaveCateCode",object);
      }else if(this.$route.name == "Sản Phẩm"){
        store.commit("handelSaveProCode",object);
      }else if(this.$route.name == "Khách Hàng"){
        store.commit("handelSaveCusCode",object);
      }else if(this.$route.name == "Nhân Viên"){
        store.commit("handelSaveEmpCode",object);
      }
     
    },
    showData(object, column) {
        //chuyển column fieldName sang snake_case (nếu cần)
       
  
        //nếu dữ liệu dạng số
       
        if (typeof object[column.fieldName] === "number" && column.type == "number") {
          
          return object[column.fieldName].toLocaleString("en-US", { minimumFractionDigits: 0,}) + "₫";
        }
  
        if (
          column.fieldName == "date" || column.fieldName == "orderDate" || column.fieldName =="createdDate" || column.fieldName == "dateOfBirth"
        ) {
          return handleDOB(object[column.fieldName]);
        }
  
        //nếu không => trả về data với field tương ứng từ header(dạng text bình thường)
        return object[column.fieldName];
      },
  }
};
</script>
<style scoped>
.table.align-items-center td, .table.align-items-center th{
  text-align: center;
  height: 60px;
}
.table.align-items-center td a {
  color: #FFFFFF;
  margin: 0 5px;
}
.fa-solid {
  font-size: 16px;
}
.container_img {
    width: 150px;

}
.img_thumb {
  width: 335px;
  white-space: unset !important;
}
.text-left {
  text-align: left !important;
}
.h6 {
  width: 250px;
  text-align: left;
  overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.h6_product {
  width: 220px !important;
  text-align: left;
  overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.noWrap {
      white-space: unset !important;
}
</style>
