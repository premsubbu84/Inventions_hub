export class Product
{
    ProductTypeID : number;
    ProductTypeName : String;
    ProductItems : ProductItem[];
}

export class ProductItem
{
    ProductItemID : number;
    ProductItemName : String;
    ProductTypeId : number;
}
