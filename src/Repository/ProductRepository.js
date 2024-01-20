import Repository from "./Repository";

const resource = "/Products";

export default {
    AddProduct(payload){
        return Repository.post(`${resource}/create`,payload);
     },
     GetAllProduct(){
        return Repository.get(`${resource}/products`);
     },
     GetProductByID(produtID){
        return Repository.get(`${resource}/GetByID/${produtID}`);
     },
     DeleteProductByID(id){
        return Repository.delete(`${resource}/${id}`);
     },
     UpdateProductByID(id,payload){
        return Repository.put(`${resource}/update/${id}`,payload);
     },
     FilterAndPaging(PageSize,PageNumber,filter){
         return Repository.get(`${resource}/filter?keyword=${filter}&PageSize=${PageSize}&PageNumber=${PageNumber}`);
     },
     doanhthungay(){
      return Repository.get(`${resource}/revenueOnDate`);
     },
     tongnhanvien(){
      return Repository.get(`${resource}/totalEmployee`);
     },
     tongdontrongngay(){
      return Repository.get(`${resource}/totalOrder`);
     },
     GetProductByCateBestSell(){
      return Repository.get(`${resource}/GetProductByCateBestSell`);
     },
     getAllOrders(){
      return Repository.get(`${resource}/getAllOrders`);
     },
     getOrderDetailByOrderID(id){
      return Repository.get(`${resource}/getOrderDetailByOrderID/${id}`);
     }
}