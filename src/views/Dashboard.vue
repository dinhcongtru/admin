<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.money.title"
              :value="stats.money.value"
              :percentage="stats.money.percentage"
              :iconClass="stats.money.iconClass"
              :iconBackground="stats.money.iconBackground"
              :detail="stats.money.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.users.title"
              :value="stats.users.value"
              :percentage="stats.users.percentage"
              :iconClass="stats.users.iconClass"
              :iconBackground="stats.users.iconBackground"
              :detail="stats.users.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.clients.title"
              :value="stats.clients.value"
              :percentage="stats.clients.percentage"
              :iconClass="stats.clients.iconClass"
              :iconBackground="stats.clients.iconBackground"
              :percentageColor="stats.clients.percentageColor"
              :detail="stats.clients.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <card
              :title="stats.sales.title"
              :value="stats.sales.value"
              :percentage="stats.sales.percentage"
              :iconClass="stats.sales.iconClass"
              :iconBackground="stats.sales.iconBackground"
              :detail="stats.sales.detail"
              directionReverse
            ></card>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 mb-lg">
            <!-- line chart -->
            <div class="card z-index-2">
              <gradient-line-chart />
            </div>
          </div>
          <div class="col-lg-5">
            <carousel />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-7 mb-lg-0 mb-4">
            <consumption-room-chart :totalProduct="total" :listCate="listCate" />
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/examples/Cards/Card.vue";
import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import Carousel from "./components/Carousel.vue";
import ConsumptionRoomChart  from "@/examples/Charts/ConsumptionRoomChart.vue"; 
import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";
import { RepositoryFactory } from "@/Repository/RepositoryFactory";
const ProductFactory = RepositoryFactory.get("Products");
const CustomerFactory = RepositoryFactory.get("Customers");
export default {
  name: "dashboard-default",
  created() {
    this.doanhthungay();
    this.tongnhanvien();
    this.tongkhachhang();
    this.tongdontrongngay();
    this.catebestseller();
  },
  computed:{
    total(){
      let temp = 0;
      if(this.listCate.length > 0) {
        this.listCate.forEach((item) => {
          temp += item.product_count;
        })
      }
      return temp;
    }
  },
  methods:{
    catebestseller(){
      ProductFactory.GetProductByCateBestSell().then(res => {
        if(res.status == 200) {
          this.listCate =res.data;
        }
      })
    },
    doanhthungay(){
      ProductFactory.doanhthungay().then((res) => {
        if(res.status == 200) {
          this.stats.money.value = res.data.toLocaleString("en-US", {
          minimumFractionDigits: 0,
        })
        }
      })
    },
     tongnhanvien() {
      ProductFactory.tongnhanvien().then((res) => {
        if (res.status == 200) {
          this.stats.users.value = res.data;
        }
      })
     },
     tongkhachhang(){
      CustomerFactory.tongkhachhang().then(res => {
        if(res.status == 200) {
          this.stats.clients.value = res.data;
        }
      })
     },
     tongdontrongngay(){
      ProductFactory.tongdontrongngay().then((res) => {
        if(res.status == 200) {
          this.stats.sales.value = res.data;
        }
      })
     }
  },
  data() {
    return {
      listCate:[],
      titleProBestSell:"Top Sản Phẩm Bán Chạy",
      stats: {
        money: {
          title: "Doanh Thu Theo Ngày",
          value: "0đ",
          iconClass: "ni ni-money-coins",
          iconBackground: "bg-gradient-primary",
        },
        users: {
          title: "Tổng Nhân Viên",
          value: "0",
          iconClass: "ni ni-world",
          iconBackground: "bg-gradient-danger",
          
        },
        clients: {
          title: "Tổng Số Khách Hàng",
          value: "0",
         
          iconClass: "ni ni-paper-diploma",
          iconBackground: "bg-gradient-success",

        },
        sales: {
          title: "Tổng Đơn Hàng Trong Ngày",
          value: "0",
        
          iconClass: "ni ni-cart",
          iconBackground: "bg-gradient-warning",
         
        },
      },
      sales: {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      },
    };
  },
  components: {
    Card,
    GradientLineChart,
    Carousel,
    ConsumptionRoomChart 
  },
};
</script>
