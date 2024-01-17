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
     }
}