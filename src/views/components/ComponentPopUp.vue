<template>
    <div class="wrapper_popup " v-show="isPopUp">
        <div class="title">
            <div class="icon_w">
                <i class="fa-sharp fa-solid fa-triangle-exclamation"></i>
            </div>
            <h3>{{ message }}</h3>
        </div>
        <div class="confirm">
            <argon-button @click="deleteRecord" color="success" size="md" variant="contained">Xóa</argon-button>
            <argon-button @click="OnCloseModal" color="danger" size="md" variant="contained">Đóng</argon-button>
        
        </div>
    </div>
    <argon-alert :color="colorMes" icon="fa-sharp fa-solid fa-circle-check" :isPoup="isClose">
    <strong>{{ notification }}</strong>
  </argon-alert>
</template>
<script>
import ArgonAlert from "@/components/ArgonAlert.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import { RepositoryFactory } from "@/Repository/RepositoryFactory";
const ProductFactory = RepositoryFactory.get("Products");

export default {
    name: "ComponentPopUp",
    components: { ArgonButton,ArgonAlert },

    props: {
        isPopUp: {
            type: Boolean,
            default: false
        },
        message: {
            type: String,
            default: ""
        },
       
    },
    data(){
        return {
            colorMes: "",
            notification: "",
            isClose: false,
        }
    },
    methods: {
        OnCloseModal() {
            this.$emit("close");
        },
        deleteRecord() {  
            //api xóa
            ProductFactory.DeleteProductByID(this.$store.state.proCode).then((res) => {
                if(res.status == 200) {
                    this.OnCloseModal();
                    this.notification = "Xóa Thành Công";
                    this.colorMes = "success" ;        
                    this.isClose = true;
                    setTimeout(() => {
                    this.isClose = false;
                    }, 2000)
                }else {
                    this.notification = "Có Lỗi Sảy Ra!";
                    this.colorMes = "danger";
                    this.isClose = true;
                    setTimeout(() => {
                    this.isClose = false;
                    }, 2000)
                }
            })
        }
    }
}
</script>
<style scoped>
.wrapper_popup {
    position: fixed;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
    background: #e9ecef;
    border-radius: 5px;
    padding: 30px;
    transition: all ease-in .5s;
}

.fa-sharp {
    font-size: 20px;
}

.fa-exclamation-triangle:before,
.fa-triangle-exclamation:before,
.fa-warning:before {
    color: red;
}

.title {
    display: flex;
    margin-bottom: 20px;

}

.icon_w {
    margin-right: 9px;
}

h3 {
    font-size: 15px;
    letter-spacing: 1.5px;
    line-height: 20px;
    color: #344767;
    font-weight: 700;
}

.confirm {
    display: flex;
    align-items: center;
    justify-content: end;
}

.btn {
    margin-left: 10px;
}</style>