import Repository from "./Repository";

const resource = "/ProductColors";

export default {
     GetAllProductColor(){
        return Repository.get(`${resource}`);
     }
}