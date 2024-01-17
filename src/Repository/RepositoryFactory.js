
import CategoryRepository from "./CategoryRepository";
import ProductRepository from "./ProductRepository";
import ColorsRepository from "./ColorsRepository";
import SizesRepository from "./SizesRepository";
const repositories = {
    Categoris: CategoryRepository,
    Products: ProductRepository,
    Colors: ColorsRepository,
    Sizes: SizesRepository,
};

export const RepositoryFactory = {
    get:name => repositories[name]
};