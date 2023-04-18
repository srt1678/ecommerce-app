import { gql } from "@apollo/client";

export const PRODUCTS = gql`
    query GetProducts {
        products {
            data {
                id
                attributes {
                    title
                    color
                    description
                    additionalInfo
                    isNew
                    oldPrice
                    newPrice
                    type
                    image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    image2 {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const GetFeaturedTrendingProduct = (type) => {
    return gql`
        query GetProducts {
            products(filters: {type: {eq: "${type}"}}){
                data {
                    id
                    attributes {
                        title
                        color
                        description
                        additionalInfo
                        isNew
                        oldPrice
                        newPrice
                        type
                        image {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        image2 {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    `;
};

export const GetSubCategory = (id) => {
    return gql`
        query GetSubCategory {
            subCategories(filters: {categories: {id: {eq: ${id}}}}){
                data {
                    id
                    attributes {
                        sub_category_title
                    }
                }
            }
        }
    `;
};

export const GetProductsFromCategory = (id) => {
    return gql`
        query GetProductsFromCategory{
            categories(filters: {id: {eq: ${id}}}){
                data{
                    attributes{
                        products{
                            data{
                                id
                                attributes {
                                    title
                                    color
                                    description
                                    additionalInfo
                                    isNew
                                    oldPrice
                                    newPrice
                                    type
                                    image {
                                        data {
                                            attributes {
                                                url
                                            }
                                        }
                                    }
                                    image2 {
                                        data {
                                            attributes {
                                                url
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `;
};

export const GetProductsFromCategoryAndSub = (
    category_ID,
    selectSubCategory,
    maxPrice,
    sort
) => {
    let sortingType = "id";
    if(sort === "up" || sort === "down"){
        sortingType = "newPrice"
        if(sort === "up"){
            sort = "asc"
        }else{
            sort = "desc"
        }
    }
    return gql`
        query getCategorySub{
            categories(filters: {id: {eq: ${category_ID}}}){
                data{
                    attributes{
                        products(filters: {sub_categories: {id: {in: [${selectSubCategory}]}}, and: {newPrice: {lte: ${maxPrice}}}}, sort:"${sortingType}:${sort}"){
                            data{
                                id
                                attributes{
                                    title
                                    description
                                    isNew
                                    additionalInfo
                                    color
                                    newPrice
                                    oldPrice
                                    type
                                    image {
                                        data {
                                        attributes {
                                            url
                                        }
                                        }
                                    }
                                    image2 {
                                        data {
                                        attributes {
                                            url
                                        }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `;
};
