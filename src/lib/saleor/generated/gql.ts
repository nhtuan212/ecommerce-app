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
    "fragment Checkout on Checkout {\n  id\n  token\n  email\n  quantity\n  totalPrice {\n    gross {\n      amount\n      currency\n    }\n  }\n  lines {\n    id\n    quantity\n    variant {\n      ...Variant\n      product {\n        ...ProductDetail\n      }\n    }\n  }\n}":
        types.CheckoutFragmentDoc,
    "fragment ProductDetail on Product {\n  id\n  slug\n  name\n  pricing {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n    discount {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n  description\n  thumbnail(size: 300) {\n    url\n  }\n  media {\n    url(size: 1080)\n  }\n}":
        types.ProductDetailFragmentDoc,
    "fragment Variant on ProductVariant {\n  id\n  name\n  attributes {\n    attribute {\n      name\n      slug\n      choices(first: 100) {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n    }\n    values {\n      name\n    }\n  }\n  pricing {\n    price {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n}":
        types.VariantFragmentDoc,
    "mutation checkoutCreate($input: CheckoutCreateInput!) {\n  checkoutCreate(input: $input) {\n    checkout {\n      ...Checkout\n    }\n    errors {\n      code\n      message\n      field\n    }\n  }\n}":
        types.CheckoutCreateDocument,
    "mutation checkoutLinesAdd($checkoutId: ID, $lines: [CheckoutLineInput!]!) {\n  checkoutLinesAdd(checkoutId: $checkoutId, lines: $lines) {\n    checkout {\n      ...Checkout\n    }\n    errors {\n      code\n      message\n      field\n    }\n  }\n}":
        types.CheckoutLinesAddDocument,
    "mutation checkoutLinesDelete($id: ID, $linesIds: [ID!]!) {\n  checkoutLinesDelete(id: $id, linesIds: $linesIds) {\n    errors {\n      code\n      message\n      field\n    }\n    checkout {\n      ...Checkout\n    }\n  }\n}":
        types.CheckoutLinesDeleteDocument,
    "mutation checkoutLinesUpdate($checkoutId: ID, $lines: [CheckoutLineUpdateInput!]!) {\n  checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {\n    errors {\n      code\n      message\n      field\n    }\n    checkout {\n      ...Checkout\n    }\n  }\n}":
        types.CheckoutLinesUpdateDocument,
    "query GetCheckoutById($id: ID) {\n  checkout(id: $id) {\n    ...Checkout\n  }\n}":
        types.GetCheckoutByIdDocument,
    'query GetCollectionBySlug($slug: String!) {\n  collection(channel: "default-channel", slug: $slug) {\n    id\n    slug\n    name\n    products(first: 10) {\n      edges {\n        node {\n          id\n          slug\n          name\n          pricing {\n            priceRange {\n              start {\n                gross {\n                  currency\n                  amount\n                }\n              }\n              stop {\n                gross {\n                  currency\n                  amount\n                }\n              }\n            }\n            discount {\n              gross {\n                currency\n                amount\n              }\n            }\n          }\n          description\n          thumbnail(size: 500) {\n            url\n          }\n          media {\n            url(size: 1080)\n            type\n            alt\n          }\n        }\n      }\n    }\n  }\n}':
        types.GetCollectionBySlugDocument,
    'query GetCollections {\n  collections(channel: "default-channel", first: 10) {\n    edges {\n      node {\n        id\n        slug\n        name\n      }\n    }\n  }\n}':
        types.GetCollectionsDocument,
    'query getCategories {\n  categories(first: 50) {\n    edges {\n      node {\n        id\n        level\n        slug\n        name\n        description\n        products(first: 10, channel: "default-channel") {\n          edges {\n            node {\n              ...ProductDetail\n            }\n          }\n        }\n      }\n    }\n  }\n}':
        types.GetCategoriesDocument,
    'query GetProductByCategory($slug: String!) {\n  category(slug: $slug) {\n    id\n    name\n    level\n    slug\n    description\n    seoTitle\n    seoDescription\n    products(first: 100, channel: "default-channel") {\n      edges {\n        node {\n          ...ProductDetail\n        }\n      }\n    }\n  }\n}':
        types.GetProductByCategoryDocument,
    'query GetProductBySlug($slug: String!) {\n  product(channel: "default-channel", slug: $slug) {\n    ...ProductDetail\n    variants {\n      ...Variant\n    }\n    category {\n      id\n      name\n      products(first: 100, channel: "default-channel") {\n        edges {\n          node {\n            ...ProductDetail\n          }\n        }\n      }\n    }\n  }\n}':
        types.GetProductBySlugDocument,
    'query GetProducts($search: String!) {\n  products(first: 50, channel: "default-channel", filter: {search: $search}) {\n    edges {\n      node {\n        ...ProductDetail\n      }\n    }\n  }\n}':
        types.GetProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "fragment Checkout on Checkout {\n  id\n  token\n  email\n  quantity\n  totalPrice {\n    gross {\n      amount\n      currency\n    }\n  }\n  lines {\n    id\n    quantity\n    variant {\n      ...Variant\n      product {\n        ...ProductDetail\n      }\n    }\n  }\n}",
): typeof import("./graphql").CheckoutFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "fragment ProductDetail on Product {\n  id\n  slug\n  name\n  pricing {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n    discount {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n  description\n  thumbnail(size: 300) {\n    url\n  }\n  media {\n    url(size: 1080)\n  }\n}",
): typeof import("./graphql").ProductDetailFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "fragment Variant on ProductVariant {\n  id\n  name\n  attributes {\n    attribute {\n      name\n      slug\n      choices(first: 100) {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n    }\n    values {\n      name\n    }\n  }\n  pricing {\n    price {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n}",
): typeof import("./graphql").VariantFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "mutation checkoutCreate($input: CheckoutCreateInput!) {\n  checkoutCreate(input: $input) {\n    checkout {\n      ...Checkout\n    }\n    errors {\n      code\n      message\n      field\n    }\n  }\n}",
): typeof import("./graphql").CheckoutCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "mutation checkoutLinesAdd($checkoutId: ID, $lines: [CheckoutLineInput!]!) {\n  checkoutLinesAdd(checkoutId: $checkoutId, lines: $lines) {\n    checkout {\n      ...Checkout\n    }\n    errors {\n      code\n      message\n      field\n    }\n  }\n}",
): typeof import("./graphql").CheckoutLinesAddDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "mutation checkoutLinesDelete($id: ID, $linesIds: [ID!]!) {\n  checkoutLinesDelete(id: $id, linesIds: $linesIds) {\n    errors {\n      code\n      message\n      field\n    }\n    checkout {\n      ...Checkout\n    }\n  }\n}",
): typeof import("./graphql").CheckoutLinesDeleteDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "mutation checkoutLinesUpdate($checkoutId: ID, $lines: [CheckoutLineUpdateInput!]!) {\n  checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {\n    errors {\n      code\n      message\n      field\n    }\n    checkout {\n      ...Checkout\n    }\n  }\n}",
): typeof import("./graphql").CheckoutLinesUpdateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: "query GetCheckoutById($id: ID) {\n  checkout(id: $id) {\n    ...Checkout\n  }\n}",
): typeof import("./graphql").GetCheckoutByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: 'query GetCollectionBySlug($slug: String!) {\n  collection(channel: "default-channel", slug: $slug) {\n    id\n    slug\n    name\n    products(first: 10) {\n      edges {\n        node {\n          id\n          slug\n          name\n          pricing {\n            priceRange {\n              start {\n                gross {\n                  currency\n                  amount\n                }\n              }\n              stop {\n                gross {\n                  currency\n                  amount\n                }\n              }\n            }\n            discount {\n              gross {\n                currency\n                amount\n              }\n            }\n          }\n          description\n          thumbnail(size: 500) {\n            url\n          }\n          media {\n            url(size: 1080)\n            type\n            alt\n          }\n        }\n      }\n    }\n  }\n}',
): typeof import("./graphql").GetCollectionBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: 'query GetCollections {\n  collections(channel: "default-channel", first: 10) {\n    edges {\n      node {\n        id\n        slug\n        name\n      }\n    }\n  }\n}',
): typeof import("./graphql").GetCollectionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: 'query getCategories {\n  categories(first: 50) {\n    edges {\n      node {\n        id\n        level\n        slug\n        name\n        description\n        products(first: 10, channel: "default-channel") {\n          edges {\n            node {\n              ...ProductDetail\n            }\n          }\n        }\n      }\n    }\n  }\n}',
): typeof import("./graphql").GetCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: 'query GetProductByCategory($slug: String!) {\n  category(slug: $slug) {\n    id\n    name\n    level\n    slug\n    description\n    seoTitle\n    seoDescription\n    products(first: 100, channel: "default-channel") {\n      edges {\n        node {\n          ...ProductDetail\n        }\n      }\n    }\n  }\n}',
): typeof import("./graphql").GetProductByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: 'query GetProductBySlug($slug: String!) {\n  product(channel: "default-channel", slug: $slug) {\n    ...ProductDetail\n    variants {\n      ...Variant\n    }\n    category {\n      id\n      name\n      products(first: 100, channel: "default-channel") {\n        edges {\n          node {\n            ...ProductDetail\n          }\n        }\n      }\n    }\n  }\n}',
): typeof import("./graphql").GetProductBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: 'query GetProducts($search: String!) {\n  products(first: 50, channel: "default-channel", filter: {search: $search}) {\n    edges {\n      node {\n        ...ProductDetail\n      }\n    }\n  }\n}',
): typeof import("./graphql").GetProductsDocument;

export function graphql(source: string) {
    return (documents as any)[source] ?? {};
}
