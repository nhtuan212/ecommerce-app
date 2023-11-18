/* eslint-disable */
import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment ProductFragment on Product {\n  id\n  slug\n  name\n  pricing {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n    discount {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n  description\n  thumbnail(size: 300) {\n    url\n  }\n}":
        types.ProductFragmentFragmentDoc,
    'query GetIndexCategories {\n  categories(first: 50) {\n    edges {\n      node {\n        id\n        level\n        slug\n        name\n        description\n        products(channel: "default-channel", first: 10) {\n          edges {\n            node {\n              ...ProductFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}':
        types.GetIndexCategoriesDocument,
    'query GetProducts {\n  products(first: 10, channel: "default-channel") {\n    edges {\n      node {\n        ...ProductFragment\n      }\n    }\n  }\n}':
        types.GetProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "fragment ProductFragment on Product {\n  id\n  slug\n  name\n  pricing {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n    discount {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n  description\n  thumbnail(size: 300) {\n    url\n  }\n}",
): typeof import("./graphql").ProductFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: 'query GetIndexCategories {\n  categories(first: 50) {\n    edges {\n      node {\n        id\n        level\n        slug\n        name\n        description\n        products(channel: "default-channel", first: 10) {\n          edges {\n            node {\n              ...ProductFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}',
): typeof import("./graphql").GetIndexCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: 'query GetProducts {\n  products(first: 10, channel: "default-channel") {\n    edges {\n      node {\n        ...ProductFragment\n      }\n    }\n  }\n}',
): typeof import("./graphql").GetProductsDocument;

export function graphql(source: string) {
    return (documents as any)[source] ?? {};
}
