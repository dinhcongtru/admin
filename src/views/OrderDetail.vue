<template>
      <div class="py-4 container-fluid">
            <div class=" row">
                  <div class="col-12">
                        <authors-table :listHeader="listHeader" :listData="listData" :isImage="false" :isCalc="true" :isAction="false" />
                  </div>
            </div>
      </div>
</template>
<script>
import AuthorsTable from "./components/AuthorsTable.vue";
import { RepositoryFactory } from "@/Repository/RepositoryFactory";
const ProductFactory = RepositoryFactory.get("Products");
export default {
      name: "OrderDetail",
      components: { AuthorsTable },
      created(){
            this.getOrderDetailByOrderID();
      },
      methods:{
            getOrderDetailByOrderID(){
                  ProductFactory.getOrderDetailByOrderID(this.$store.state.orderCode).then((res) => {
                        if(res.status == 200) {
                              this.listData = res.data;
                        }
                  })
            }
      },
      data() {
            return {
                 
                  listHeader: [
                        { fieldName: "productCode", text: "Mã SẢN PHẨM", style: "mb-0 text-sm" },
                        { fieldName: "quantity", text: "Số Lượng", style: "mb-0 text-sm" },
                        { fieldName: "price", text: "giá tiền", style: "mb-0 text-sm",type:"number" },
                  ],
                  listData: [
                        
                  ]
            }
      },
}
</script>