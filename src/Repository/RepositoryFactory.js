
import CategoryRepository from "./CategoryRepository";
import ProductRepository from "./ProductRepository";
import ColorsRepository from "./ColorsRepository";
import SizesRepository from "./SizesRepository";
import CustomerRepository from "./CustomerRepository";
const repositories = {
    Categoris: CategoryRepository,
    Products: ProductRepository,
    Colors: ColorsRepository,
    Sizes: SizesRepository,
    Customers: CustomerRepository
};

export const RepositoryFactory = {
    get:name => repositories[name]
};