<template>
      <div class="py-4 container-fluid">
        <argon-input placeholder="Type here..." icon="fa-solid fa-magnifying-glass" iconDir="right" />
        <div class=" row">
          <div class="col-12">
            <authors-table :listHeader="listHeader" :listData="listData" />
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
    import axios from 'axios'
    export default {
      name: "EmplyeeList",
      components: {
        AuthorsTable,
        ArgonPagination,
        ArgonPaginationItem,
        ArgonInput
    
      },
      created(){
        this.getAll();
      },
      methods:{
        getAll(){
          axios.get(`http://localhost:5041/getAll`).then(res => {
            if(res.status == 200) {
              this.listData = res.data;
            }
          })
        }
      },
      data() {
        return {
          listHeader: [
            { fieldName: "fullName", text: "Họ và tên", style: "mb-0 text-sm" },
            { fieldName: "email", text: "email", style: "mb-0 text-sm" },
            { fieldName: "phone", text: "Số Điện Thoại", style: "mb-0 text-sm" },
            { fieldName: "address", text: "Địa Chỉ", style: "mb-0 text-sm" },
            { fieldName: "gender", text: "giới tính", style: "mb-0 text-sm" },
            { fieldName: "designation", text: "Chức Vụ", style: "mb-0 text-sm" },
            { fieldName: "createdDate", text: "Thời gian tạo", style: "mb-0 text-sm" },
            { fieldName: "dateOfBirth", text: "ngày sinh", style: "mb-0 text-sm" },
           
           
    
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
  top: 15%;
    position: fixed;
    width: 220px;
    right: 60px;
    z-index: 1;
}
</style>  