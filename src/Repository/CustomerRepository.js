import Repository from "./Repository";

const resource = "/Customers";

export default {
    tongkhachhang(){
        return Repository.get(`${resource}/totalCustomer`);
     },
     GetAllCustomer(){
        return Repository.get(`${resource}`);
     },
     GetByID(id){
        return Repository.get(`${resource}/${id}`);
     }
}