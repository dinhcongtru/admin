import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Orders from "../views/Orders.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import OrderDetail from "../views/OrderDetail.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Tổng Quan",
    component: Dashboard,
  },
  {
    path: "/orders",
    name: "Đơn Hàng",
    component: Orders,
  },
  {
    path: "/orders/detail:key",
    name: "Chi Tiết Đơn Hàng",
    component: OrderDetail,
  },
  {
    path: "/categoris",
    name: "Danh Mục Sản Phẩm",
    component: () => import('@/views/CategoryList'),
  },
  {
    path: "/categoris/create",
    name: "Thêm Mới Danh Mục",
    component: () => import('@/views/CategoryInfo'),
  },
  {
    path: "/categoris/detail:key",
    name: "Chi Tiết Danh Mục Sản Phẩm",
    component: () => import('@/views/CategoryInfo'),
  },
  {
    path: "/products",
    name: "Sản Phẩm",
    component: () => import('@/views/ProductList'),
  },
  {
    path: "/products/create",
    name: "Thêm Mới Sản Phẩm",
    component: () => import('@/views/ProductInfo'),
  },
  {
    path: "/products/detail:key",
    name: "Chi Tiết Sản Phẩm",
    component: () => import('@/views/ProductInfo'),
  },
  {
    path: "/customer-manage",
    name: "Khách Hàng",
    component: () => import('@/views/CustomerList'),
  },
  {
    path: "/customer-manage/detail:key",
    name: "Chi Tiết Khách Hàng",
    component: () => import('@/views/CustomerInfo'),
  },
  {
    path: "/staff-manage",
    name: "Nhân Viên",
    component: () => import('@/views/EmplyeeList'),
  },
  {
    path: "/staff-manage/detail:key",
    name: "Chi Tiết Nhân Viên",
    component: () => import('@/views/EmployeeInfo'),
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
