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
export default {
      name: "OrderDetail",
      components: { AuthorsTable },
      data() {
            return {
                 
                  listHeader: [
                        { fieldName: "productCode", text: "Mã SẢN PHẨM", style: "mb-0 text-sm" },
                        { fieldName: "quantity", text: "Số Lượng", style: "mb-0 text-sm" },
                        { fieldName: "price", text: "giá tiền", style: "mb-0 text-sm",type:"number" },
                  ],
                  listData: [
                        {productCode: "SPAJW0239",productImagesUrl: "https://ik.imagekit.io/mbtxd1r6m/z4782313532747_8ab7a9c193f712de4ddefd24df8262ea.jpg?updatedAt=1704515446398",productName :"Áo Khoác Phao Regular 5051",productSizeName:"L",productColorName:"Xanh",quantity:10,price:300000}
                  ]
            }
      },
}
</script>