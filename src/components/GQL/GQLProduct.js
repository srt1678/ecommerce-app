import { gql } from "@apollo/client";

const productFields = `
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
`;

export const PRODUCTS = gql`
    query GetProducts {
        products {
            data {
                ${productFields}
            }
        }
    }
`;

export const GetFeaturedTrendingProduct = (type) => {
    return gql`
        query GetProducts {
            products(filters: {type: {eq: "${type}"}}){
                data {
                    ${productFields}
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
            categories(filters: {id: {eq: ${id}}}){
                data{
                    attributes{
                        category_image{
                            data{
                                attributes{
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

export const GetProductsFromCategory = (id) => {
    return gql`
        query GetProductsFromCategory{
            categories(filters: {id: {eq: ${id}}}){
                data{
                    attributes{
                        products{
                            data{
                                ${productFields}
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
    if (sort === "up" || sort === "down") {
        sortingType = "newPrice";
        if (sort === "up") {
            sort = "asc";
        } else {
            sort = "desc";
        }
    }
    return gql`
        query getCategorySub{
            categories(filters: {id: {eq: ${category_ID}}}){
                data{
                    attributes{
                        products(filters: {sub_categories: {id: {in: [${selectSubCategory}]}}, and: {newPrice: {lte: ${maxPrice}}}}, sort:"${sortingType}:${sort}", pagination: {limit: 15}){
                            data{
                                ${productFields}
                            }
                        }
                    }
                }
            }
        }
    `;
};

export const GetProductDetail = gql`
    query getProductDetail($id: ID!){
        product(id: $id){
            data {
                ${productFields}
            }
        }
    }
`;

export const SearchProduct = (title) => {
    return gql`
        query SearchProduct {
            products(filters: {title: {contains: "${title}"}}, pagination: {limit: 25}){
                data {
                    ${productFields}
                }
            }
        }
    `;
};