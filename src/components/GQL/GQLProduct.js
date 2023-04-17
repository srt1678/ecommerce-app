import { useQuery, gql } from "@apollo/client";

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
                }
            }
        }
    }
`;