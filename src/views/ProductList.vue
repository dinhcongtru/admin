<template>
  <div class="py-4 container-fluid fix">
    <argon-input placeholder="Tìm Kiếm..." icon="fa-solid fa-magnifying-glass" v-model="filter" iconDir="right" />
    <argon-button color="success" size="md" variant="contained">
      <router-link to="/products/create">
        Thêm Mới
      </router-link>
    </argon-button>
    <div class=" row">
      <div class="col-12">
        <authors-table :listHeader="listHeader" :listData="listData" :isImage="true" :isProduct="true"
          @reset="resetData" />
      </div>
    </div>
    <argon-pagination color="success" size="md">
      <argon-pagination-item prev />
      <argon-pagination-item label="1" active />
      <argon-pagination-item label="2" />
      <argon-pagination-item label="3" />
      <argon-pagination-item next />
    </argon-pagination>
  </div>
</template>
<script>
import ArgonButton from "@/components/ArgonButton.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import AuthorsTable from "./components/AuthorsTable.vue";
import ArgonPagination from "@/components/ArgonPagination.vue";
import ArgonPaginationItem from "@/components/ArgonPaginationItem.vue";
import { RepositoryFactory } from "@/Repository/RepositoryFactory";
const ProductFactory = RepositoryFactory.get("Products");
export default {
  name: "CategoryList",
  async created() {
    await this.getAllProduct();
  },
  methods: {
    async getAllProduct() {
      await ProductFactory.GetAllProduct().then(res => {
        this.listData = res.data;
      })
    },
    resetData() {
      this.getAllProduct();
    },
    async filterAndPaging(filter,pageNumber){
      ProductFactory.FilterAndPaging(7,pageNumber,filter).then((res) => {
        if(res.status == 200){
          this.listData = res.data.data;
        }
      })
    }
  },
  watch:{
    filter(){
      this.filterAndPaging(this.filter);
    }
  },
  components: {
    ArgonButton,
    AuthorsTable,
    ArgonPagination,
    ArgonPaginationItem,
    ArgonInput,


  },

  data() {
    return {
      filter:"",
      listHeader: [
        { fieldName: "productCode", text: "Mã Sản Phẩm" },
        { fieldName: "productPrice", text: "Giá Sản PHẨM", type: "number" },
        { fieldName: "material", text: "Chất liệu", style: "h6_product", classTD: "noWrap", styleH: 'text-left' },
        { fieldName: "totalQuantity", text: "số lượng" },
        { fieldName: "status", text: "Trạng thái" },
      ],
      listData: []
    }
  }
}
</script>
<style scoped>
.fix {
  position: fixed;
  top: 10%;
  width: 84%;
}

.form-group {
  top: 15%;
  position: fixed;
  width: 220px;
  right: 235px;
  z-index: 1;
}

.btn {
  top: 15%;
  position: fixed;
  right: 95px;
  z-index: 1;
}

.btn a {
  color: #fff;
}

a {
  cursor: pointer;
}
</style>