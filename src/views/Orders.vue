<template>
  <div class="py-4 container-fluid">
    <argon-input placeholder="Type here..." icon="fa-solid fa-magnifying-glass" iconDir="right" />
    <div class=" row">
      <div class="col-12">
        <authors-table :listHeader="listHeader" :listData="listData" :isDelete="false" />
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
import ArgonInput from "@/components/ArgonInput.vue";
import AuthorsTable from "./components/AuthorsTable.vue";
import ArgonPagination from "@/components/ArgonPagination.vue";
import ArgonPaginationItem from "@/components/ArgonPaginationItem.vue";
import { RepositoryFactory } from "@/Repository/RepositoryFactory";
const ProductFactory = RepositoryFactory.get("Products");
export default {
  name: "orders",
  components: {
    AuthorsTable,
    ArgonPagination,
    ArgonPaginationItem,
    ArgonInput

  },
  created(){
    this.getAllOrders();
  },
  methods:{
    getAllOrders(){
      ProductFactory.getAllOrders().then(res => {
        if(res.status == 200) {
          this.listData = res.data;
        }
      })
    }
  },
  data() {
    return {
      listHeader: [
        { fieldName: "orderCode", text: "Mã đơn hàng", style: "mb-0 text-sm" },
        { fieldName: "fullName", text: "Họ và tên", style: "mb-0 text-sm" },
        { fieldName: "email", text: "email", style: "mb-0 text-sm" },
        { fieldName: "totalPrice", text: "Tổng Tiền", style: "mb-0 text-sm", type: "number" },
        { fieldName: "status", text: "Trạng Thái", style: "badge badge-sm bg-gradient-success" },
        { fieldName: "orderDate", text: "Thời gian tạo", style: "text-secondary text-xs font-weight-bold" },

      ],
      listData: [

      ],
     
      stats: {
        titleColor: "opacity-7 text-white",
        descColor: "text-white",
        trip: {
          title: "Today's Trip",
          desc: "145 KM",
          classIcon: "text-dark ni ni-money-coins",
        },
        health: {
          title: "Battery Health",
          desc: "99 %",
          classIcon: "text-dark ni ni-controller ",
        },
        speed: {
          title: "Average Speed",
          desc: "56 Km/h",
          classIcon: "text-dark ni ni-delivery-fast",
        },
        volume: {
          title: "Music Volume",
          desc: "15/100",
          classIcon: "text-dark ni ni-note-03",
        },
      },
    };
  },
};
</script>
<style scoped>
.form-group {
  position: absolute;
    width: 220px;
    right: 60px;
    z-index: 1;
    top: 19%;
}
</style>
