<template>
  <main>
    <div class="container-fluid">
      <div class="page-header min-height-300" style="
            background-image: url('https://pos.nvncdn.com/be3159-662/bn/20231219_VNv7koak.gif');
            margin-right: -24px;
            margin-left: -5%;
          ">
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
                  <label for="example-text-input" class="form-control-label">Mã Sản Phẩm</label>
                  <argon-input placeholder="Mã Sản Phẩm..." v-model="product.productCode" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Tên Sản Phẩm</label>
                  <argon-input type="text" placeholder="Tên Sản Phẩm..." v-model="product.productName" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Giá Sản Phẩm</label>
                  <argon-input type="number" placeholder="Giá Sản Phẩm..." v-model="product.productPrice" />
                </div>

                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Danh Mục Sản Phẩm</label>
                  <DxSelectBox v-model="product.categoryID" placeholder="Danh Mục ..." :search-enabled="true"
                    :data-source="category" :input-attr="{ 'aria-label': 'Product' }" display-expr="productCategoryName"
                    value-expr="productCategoryID" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Trạng Thái</label>
                  <argon-input type="text" placeholder="Trạng Thái..." v-model="product.status" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Chất Liệu</label>
                  <div class="form-group">
                    <textarea class="input" v-model="product.material" placeholder="Chất Liệu" rows="3" style="
                                  width: 100%;
                                  padding: 5px;
                                  box-shadow: 0 0 0 1px #d9d9d9;
                                  border-radius: 4px;
                                  transition: all 0.2s ease-out;
                                  
                                "></textarea>
                  </div>
                  <!-- <argon-input type="textarea" placeholder="Chất Liệu..." v-model="product.material" /> -->
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Kiểu Dáng</label>
                  <div class="form-group">
                    <textarea class="input" v-model="product.description" placeholder="Kiểu Dáng" rows="3" style="
                                  width: 100%;
                                  padding: 5px;
                                  box-shadow: 0 0 0 1px #d9d9d9;
                                  border-radius: 4px;
                                  transition: all 0.2s ease-out;
                                  
                                "></textarea>
                  </div>
                  <!-- <argon-input type="textarea" placeholder="Chất Liệu..." v-model="product.material" /> -->
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Chi Tiết</label>
                  <div class="form-group">
                    <textarea class="input" v-model="product.quickDescription" placeholder="Chi Tiết" rows="3" style="
                                  width: 100%;
                                  padding: 5px;
                                  box-shadow: 0 0 0 1px #d9d9d9;
                                  border-radius: 4px;
                                  transition: all 0.2s ease-out;
                                  
                                "></textarea>
                  </div>
                  <!-- <argon-input type="textarea" placeholder="Chất Liệu..." v-model="product.material" /> -->
                </div>
              </div>
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Các Biến Thể</p>
              <div class="row">

                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label">Màu Sắc</label>
                  <VueMultiselect v-model="modelColor" :options="listColors" :multiple="true" :taggable="true"
                    @tag="addTag" tag-placeholder="Add this as new tag" placeholder="Màu Sắc ..." label="productColorName"
                    track-by="productColorID" />
                </div>

                <div class="col-md-3">
                  <label for="example-text-input" class="form-control-label">Kích Cỡ</label>
                  <VueMultiselect v-model="modelSize" :options="listSizes" :multiple="true" :taggable="true" @tag="addTag"
                    tag-placeholder="Add this as new tag" placeholder="Kích Thước ..." label="productSizeName"
                    track-by="productSizeID" />
                </div>
                
              </div>
            </div>
            <div class="generate_variants">
              <argon-button color="secondary" size="sm" @click="onToggleVariant">Tạo Biến Thể</argon-button>
            </div>
            <div class="btn_bottom">

              <a>
                <argon-button color="success" size="md" variant="contained" @click="SaveProduct">Lưu</argon-button>
              </a>

              <a href="/products">
                <argon-button color="success" size="md" variant="outline" @click="back">Trở Về</argon-button>
              </a>

            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
  <div class="modal_wrapper" :class="{ 'active_wrapper': active }">
    <div class="over_lay" :class="{ 'active_overlay': active }"></div>
    <div class="row row-wraper content_wrapper">
      <div class="col-md-12">
        <div class="card card_wrapper">
          <div class="card-body" v-for="(variant, index) in GeneralVariant" :key="index">
            <div class="title_variant">
              <h3 class="">#{{ index + 1 }}</h3>
              <argon-input v-model="variant.productColorName" :isReadOnly="true" />
              <argon-input v-model="variant.productSizeName" :isReadOnly="true" />
            </div>

            <div class="row">
              <div class="col-md-8">
                <label for="example-text-input" class="form-control-label">Ảnh Sản Phẩm</label>
                <div class="form-group">
                  <input type="file" multiple="multiple" @change="handleFileChange(variant)">
                </div>
                <!-- <ul class="list_items" :class="{'item_active' : this.selectedFiles.length > 0}" v-show="this.selectedFiles.length > 0">
                  <li v-for="(file,ind) in selectedFiles" :key="ind" class="item">
                    <img :src="file.productImageUrl" />
                  </li> -->
                <!-- </ul> -->
              </div>
              <div class="col-md-3">
                <label for="example-text-input" class="form-control-label">Số Lượng</label>
                <div class="form-group">
                  <input type="number" class="form-control form-control-default invalid" placeholder="Số Lượng..."
                    v-model="variant.quantity" />
                </div>
              </div>
            </div>


          </div>

          <div class="btn_bottom btn_variant">
            <a @click="update">
              <argon-button color="success" size="md" variant="contained">Lưu</argon-button>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
  <argon-alert :color="colorMes" icon="fa-sharp fa-solid fa-circle-check" :isPoup="isClose">
    <strong>{{ message }}</strong>
  </argon-alert>
</template>
<script>
import ArgonAlert from "@/components/ArgonAlert.vue";
// import ProfileCard from "./components/ProfileCard.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import { DxSelectBox } from 'devextreme-vue/select-box';
import { RepositoryFactory } from "@/Repository/RepositoryFactory";
import axios from "axios";
const CategoryFactory = RepositoryFactory.get("Categoris");
const ColorFactory = RepositoryFactory.get("Colors");
const SizeFactory = RepositoryFactory.get("Sizes");
const ProductFactory = RepositoryFactory.get("Products");
import VueMultiselect from 'vue-multiselect'
export default {
  name: "ProductInfo",
  components: { ArgonInput, ArgonButton, DxSelectBox, VueMultiselect, ArgonAlert },
  async created() {
    //call api load record
    await this.getAllCategory();
    await this.getAllProductColor();
    await this.getAllProductSize();
    if(this.$route.params.key !== undefined)   {
      await this.getProductByID(this.$store.state.proCode);
      

    }

     

  },
  mounted() {
   
  },
  computed: {
   
    GeneralVariant() {
      const result = [];
      if(this.modelSize.length > 0 && this.modelColor.length > 0)
        this.modelColor.forEach(color => {
          this.modelSize.forEach(size => {
            result.push({variantID: size.variantID, productColorName: color.productColorName, productColorID: color.productColorID, productSizeName: size.productSizeName, productSizeID: size.productSizeID, quantity: size.quantity,imageItem:[] });

          })
      })
      return result;
    },

  },
  data() {
    return {
      colorMes: "",
      message: "",
      isClose: false,
      modelColor: [],
      modelSize: [],
      active: false,
      selectedFiles: [],
      listVariants: [
        { productColorName: "Xanh", productSizeName: "2XL" },
        { productColorName: "Đỏ", productSizeName: "XL" },
        { productColorName: "Tráng", productSizeName: "S" },
      ],
      title: this.$route.name,
      product: {},
      category: {},
      listColors: [],
      listSizes: [],
      listImageClinet: [],
     

    }
  },
  methods: {
    async getProductByID(id) {
      try {
        await ProductFactory.GetProductByID(id).then(res => {
          this.product = res.data;
          this.product.listColors.forEach(color => {
            this.modelColor.push(color);
            color.sizeItem.forEach(size =>{
              this.modelSize.push(size);
            });
          });
          if(this.modelColor.length > 1) {
            let index = (this.modelSize.length) / (this.modelColor.length);
            this.modelSize  = this.modelSize.splice(0, index);
            

          }   
        });
      } catch (error) {
        console.log(error);
      }
    },
    onClickReturn() {
      console.log("run");
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.taggingOptions.push(tag)
      this.taggingSelected.push(tag)
      console.log(this.testColor);
    },
    async getAllCategory() {
      try {
        await CategoryFactory.GetAllCategory().then((res) => {
          if (res.status == 200) {
            this.category = res.data;
          }
        })
      } catch (error) {
        console.log(error);
      }
    },
    async getAllProductColor() {
      try {
        await ColorFactory.GetAllProductColor().then((res) => {
          if (res.status == 200) {
            this.listColors = res.data;
          }
        })
      } catch (error) {
        console.log(error);
      }
    },
    async getAllProductSize() {
      try {
        await SizeFactory.GetAllProductSize().then((res) => {
          if (res.status == 200) {
            this.listSizes = res.data;
          }
        })
      } catch (error) {
        console.log(error);
      }
    },
    async handleFileChange(variant) {
      const fileList = Array.from(event.target.files);
      this.selectedFiles = [];
      fileList.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedFiles.push({
            productImageUrl: reader.result,
          });
        };
        reader.readAsDataURL(file);
      });
      // const fileList = event.target.files;
      const files = new FormData()
      for (let i = 0; i < fileList.length; i++) {
        files.append("files", fileList[i]);
      }
      await axios.post("http://localhost:5041/api/Upload", files, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(res => {
        if (res.status == 200) {
          variant.imageItem = [];
          res.data.forEach(item => {
            if(this.$route.params.key !== undefined) {
              variant.imageItem.forEach(image => {
                variant.imageItem.push({productImageID: image.productImageID, fileId: item.fileId, thumbnailUrl: item.thumbnailUrl})
              })
            }else {
              variant.imageItem.push({ fileId: item.fileId, thumbnailUrl: item.thumbnailUrl});
            }
          });
        }
        
      })
    },
    update() {
      this.active = false;
    },
    onToggleVariant() {
      if (this.modelColor.length > 0 && this.modelSize.length > 0) {

        this.active = true;
      }
    },
    async SaveProduct() {
      try {
        this.GeneralVariant.forEach(item => { 
          let exitsColor = this.listImageClinet.some(color => color.productColorID == item.productColorID);
          let targetColor = this.listImageClinet.find(color => color.productColorID == item.productColorID);
          if(exitsColor){
            item.imageItem.forEach(img => {
              targetColor.imageItem.push(img);
            });
            let isExitsS = targetColor.sizeItem.some(size => size.productSizeID == item.productSizeID);
            if(!isExitsS) {
              targetColor.sizeItem.push({variantID: item.variantID, productSizeID: item.productSizeID, productSizeName: item.productSizeName, quantity: item.quantity })
            }
          } else{
            item.sizeItem = [];
            item.sizeItem.push({variantID: item.variantID, productSizeID: item.productSizeID, productSizeName: item.productSizeName, quantity: item.quantity });
            this.listImageClinet.push(item);
          }
        });
        // console.log(this.listImageClinet);
        this.product.listColors = this.listImageClinet;
        if(this.$route.params.key == undefined || this.$route.params.key == null){
            await ProductFactory.AddProduct(this.product).then(res => {
            if (res.status == 201) {  
                this.message = "Thêm Thành Công";
                this.colorMes = "success" ;        
                this.isClose = true;
                window.location = "/products"
                setTimeout(() => {
                  this.isClose = false;
                }, 2000)
            }
          });
        }else {
          //sửa
          await ProductFactory.UpdateProductByID(this.product.productID,this.product).then((res) => {
            if(res.status == 200){
              this.message = "Sửa Thành Công";
                this.colorMes = "success" ;        
                this.isClose = true;
                window.location = "/products"
                setTimeout(() => {
                  this.isClose = false;
                }, 2000)
            }
          })
        }
        
      } catch (error) {
        this.message = "Có Lỗi Sảy Ra Vui Lòng Thử Lại!";
        this.colorMes = "danger";
        this.isClose = true;
        setTimeout(() => {
          this.isClose = false;
        }, 2000)
        console.log(error);
      }
    },
    back() {
      this.isClose = true;
      window.location = "/products";
      setTimeout(() => {
        this.isClose = false;
      }, 3000)
    }
  }

}
</script>
<style src="vue-multiselect/dist/vue-multiselect.ssr.css"></style>
<style scoped>
.list_items {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    transition: all ease-in .5s;
    opacity: 0;
}
.item_active{
  opacity: 1;
}
.item {
  width: 100px;
    height: 100%;
    margin-bottom: 10px;
    list-style-type: none;
}
.item:nth-child(3n + 2) {
  margin: 0 10px;
}
.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.row-wraper {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%, -50%);
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

.dx-texteditor.dx-editor-outlined {
  height: 39px;
  border-radius: 8px;
}

textarea {
  color: inherit;
  font: inherit;
  margin: 0;
  padding: 0;
  appearance: auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-font-smoothing: inherit;
  border: none;
  background: transparent;
  line-height: normal;
  outline: none;
}

.generate_variants {
  padding-left: 24px;
}

.over_lay {
  background: rgb(0 0 0 / 50%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 7777;
  opacity: 0;
  visibility: hidden;
  z-index: 10000;
  transition: all 200ms linear;
}

.active_overlay {
  opacity: 1;
  visibility: visible;
}

.content_wrapper {
  z-index: 10001;
  width: 70%;
  position: absolute;
  top: 0;
  left: 45%;
  transform: translateX(-50%);
}

.title_variant {
  display: flex;
  align-items: center;

}

.title_variant h3 {
  margin-right: 10px;
  margin-bottom: 20px;
}

.title_variant .form-group {
  margin-right: 10px;
  width: 120px;
}

.card_wrapper {
  flex-direction: row;
  flex-wrap: wrap;
}

.card_wrapper .card-body {
  width: 50%;
  flex: unset !important;
}

.btn_variant {
  width: 100%;
}

.modal_wrapper {
  transition: transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
  visibility: hidden;


}

.active_wrapper {
  opacity: 1;
  visibility: visible;
}
</style>