<template>
      <div class="py-4 container-fluid">
        <argon-button color="success" size="md" variant="contained">
          <a href="/categoris/create">
            Thêm Mới
          </a>
        </argon-button>
    <div class=" row">
      <div class="col-10">
        <authors-table 
        
        :listHeader="listHeader"
        :listData="listData"
        />
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
import AuthorsTable from "./components/AuthorsTable.vue";
import ArgonPagination from "@/components/ArgonPagination.vue";
import ArgonPaginationItem from "@/components/ArgonPaginationItem.vue";
export default {
  name: "CategoryList",
  components: {
    ArgonButton,
    AuthorsTable,
    ArgonPagination,
    ArgonPaginationItem
   
  },
  data(){
      return{
           
            listHeader:[
                  {fieldName :"productCategoryCode",text:"Mã Danh Mục"},
                  {fieldName :"productCategoryName",text:"Tên Danh Mục"},
                  {fieldName :"status",text:"Trạng thái"},
            ],
            listData:[
                  {productCategoryCode:"NDHA0499",productCategoryName:"Aó Nam" ,status:"Kích Hoạt"},
                  {productCategoryCode:"NDHA0499",productCategoryName:"Aó Nam" ,status:"Kích Hoạt"},
                  {productCategoryCode:"NDHA0499",productCategoryName:"Aó Nam" ,status:"Kích Hoạt"},
            ]
      }
  }
}
</script>
<style scoped>
.pagination {
  justify-content: end;
  margin-right: 130px;
}
.form-group {
  position: absolute;
    width: 220px;
    right: 60px;
    z-index: 1;
    top: 19%;
}
.btn {
    top: 22%;
    position: absolute;
    right: 230px;
    z-index: 1;
}
.row {
  justify-content: center;
}
 .btn a {
  color: #fff;
 }
</style>