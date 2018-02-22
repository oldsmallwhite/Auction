import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {

  private products: Array<Product> = [
    new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品，是我在学习Angular的时候创建的", ["电子产品", "硬件设备"]),
    new Product(2, "第二个商品", 5.99, 2.5, "这是第一个商品，是我在学习Angular的时候创建的", ["电子产品", "图书"]),
    new Product(3, "第三个商品", 3.99, 3.5, "这是第一个商品，是我在学习Angular的时候创建的", ["电子产品", "硬件设备"]),
    new Product(4, "第四个商品", 2.99, 4.5, "这是第一个商品，是我在学习Angular的时候创建的", ["图书", "硬件设备"]),
    new Product(5, "第五个商品", 7.99, 1.5, "这是第一个商品，是我在学习Angular的时候创建的", ["电子产品", "图书"]),
    new Product(6, "第六个商品", 9.99, 2.5, "这是第一个商品，是我在学习Angular的时候创建的", ["电子产品", "硬件设备"]),
  ];

  private comments: Array<Comment> = [
    new Comment(1, 1, "2018-01-22 22:22:22", "张三", 3, "东西不错"),
    new Comment(2, 1, "2018-01-22 22:22:22", "赵四", 3, "东西行不错"),
    new Comment(3, 1, "2018-01-22 22:22:22", "刘能", 3, "发货很快"),
    new Comment(4, 2, "2018-01-22 22:22:22", "大脚", 3, "物美价廉")
  ];

  constructor() {
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number) {
    return this.comments.filter((comment) => comment.productId == id);
  }

  public getOptions(): string[]{
    return ['电子产品','硬件设备','图书']
  }

}

export class Product {

  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}

export class Comment {

  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {
  }
}
