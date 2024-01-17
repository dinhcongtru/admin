<template>
  <div class="card">
    <div class="p-3 pb-0 card-header">
      <div class="d-flex align-items-center">
        <h6 class="mb-0">Top Danh Mục Sản Phẩm</h6>
        <button
          type="button"
          class="mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="See the consumption per room"
        >
          <i class="fas fa-info"></i>
        </button>
      </div>
    </div>
    <div class="p-3 card-body">
      <div class="row">
        <div class="text-center col-5">
          <div class="chart">
            <canvas id="chart-consumption" class="chart-canvas" height="197"></canvas>
          </div>
          <h4 class="font-weight-bold mt-n8">
            <span>{{ totalProduct }}</span>
          </h4>
        </div>
        <div class="col-7">
          <div class="table-responsive">
            <table class="table mb-0 align-items-center">
              <tbody>
                <tr v-for="(cate,index) in listCate" :key="index">
                  <td>
                    <div class="px-2 py-0 d-flex">
                      <span class="badge bg-primary me-2">&nbsp;</span>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ cate.productCategoryName }}</h6>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-center align-middle">
                    <!-- tính toán ra chỉ số danh mục đó có sản phẩm chiếm bao nhiêu % so với cả kho lấy 5 danh mục cao nhất-->
                    <span class="text-xs font-weight-bold">{{ totalpreSion }}%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "consumption-by-room-chart",
  props:{
    totalProduct:{
      type: Number,
      default:0
    },
    listCate:{
      type:Array,
      default: () => [
        {
          productCategoryName: "Áo Nam",
        }
      ]
    },
    totalpreSion:{
      type:Number,
      default:0
    }
  },
  computed :{
    options(){
      const result = [];
      if(this.listCate.length > 0) {
        this.listCate.forEach(cate => {
          result.push(cate.productCategoryName);
        });
      }
      return result;
    }
  },
  mounted() {
    // Chart Doughnut Consumption by room
    var ctx1 = document.getElementById("chart-consumption").getContext("2d");

    var gradientStroke1 = ctx1.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, "rgba(203,12,159,0.2)");
    gradientStroke1.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke1.addColorStop(0, "rgba(203,12,159,0)"); //purple colors

    new Chart(ctx1, {
      type: "doughnut",
      data: {
        labels: this.options,
        datasets: [
          {
            label: "Consumption",
            weight: 9,
            cutout: 90,
            tension: 0.9,
            pointRadius: 2,
            borderWidth: 2,
            backgroundColor: [
              "#5e72e4",
              "#8392ab",
              "#11cdef",
              "#2dce89",
              "#fb6340",
            ],

            data: [15, 20, 13, 32, 20],
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  },
};
</script>
