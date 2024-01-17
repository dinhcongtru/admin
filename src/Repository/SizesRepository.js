import Repository from "./Repository";

const resource = "/ProductSizes";

export default {
     GetAllProductSize(){
        return Repository.get(`${resource}`);
     }
}