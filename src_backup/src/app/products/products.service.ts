import { Injectable } from '@angular/core';
import { Product } from './products.class';
import { ProductItem } from './products.class';

@Injectable()
export class ProductsService {

  dentalProductItemList: ProductItem[] = [
    {
      ProductItemID: 1,
      ProductItemName: 'ABC',
      ProductTypeId: 1
    },
    {
      ProductItemID: 2,
      ProductItemName: 'DentiCare',
      ProductTypeId: 1
    },
    {
      ProductItemID: 3,
      ProductItemName: 'OralDoc',
      ProductTypeId: 1
    }
  ];

  visionProductItemList: ProductItem[] = [
    {
      ProductItemID: 1,
      ProductItemName: 'ICare',
      ProductTypeId: 2
    },
    {
      ProductItemID: 2,
      ProductItemName: 'VisionExcel',
      ProductTypeId: 2
    }
  ];


  productList: Product[] = [
    {
      ProductTypeID: 1,
      ProductTypeName: 'Dental',
      ProductItems: this.dentalProductItemList
    },
    {
      ProductTypeID: 2,
      ProductTypeName: 'Vision',
      ProductItems: this.visionProductItemList
    }
  ]



  constructor() { }

  getAllProducts(): Product[] {
    return this.productList;
  }

  getAllDentalProductItems(): ProductItem[] {
    return this.dentalProductItemList;
  }

  getAllVisionProductItems(): ProductItem[] {
    return this.visionProductItemList;
  }

  getProductNameById(productTypeId: number, productItemId: number): String {
    if (productTypeId == 2) // Vision
    { 
      return this.visionProductItemList.find(visionProduct => visionProduct.ProductItemID == productItemId).ProductItemName; 
    }
    if (productTypeId == 1) // Dental
    { 
      return this.dentalProductItemList.find(dentalProduct => dentalProduct.ProductItemID == productItemId).ProductItemName; 
    }
  }
}
