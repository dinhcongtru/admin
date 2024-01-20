import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    isLogin:false,
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    orderCode: null,
    cateCode:null,
    proCode:null,
    cusCode:null,
    empCode:null,

  },
  mutations: {
    changeLogin(state) {
      return state.isLogin = true;
    },
    handelSaveOrderCode(state,payload){
      return state.orderCode = payload.orderID;
    },
    handelSaveCateCode(state,payload){
      return state.cateCode = payload.productCategoryCode;
    },
    handelSaveProCode(state,payload){
      return state.proCode = payload.productID;
    },
    handelSaveCusCode(state,payload){
      return state.cusCode = payload.customer_id;
    },
    handelSaveEmpCode(state,payload){
      return state.empCode = payload.userID
    },
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");

      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    }
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    }
  },
  getters: {},
  plugins: [
    createPersistedState({
      key: "admin", // Đặt tên key cho mảng
      paths: [], // Chỉ lưu trữ mảng này
      // transformState: (state) => ({
      //   product: state.product.slice(0), // Tạo bản sao của mảng để lưu trữ
      //   customer: state.customer.slice(0),
      //   phiStoryProduct: state.cloneProduct.slice(0),
      //   paramsRouterProduct: state.paramsRouterProduct.slice(0),
      // }),
    }),
  ],
});
