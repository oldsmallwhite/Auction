import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品，是我在学习Angular的时候创建的", ["电子产品", "硬件设备"]),
      new Product(2, "第二个商品", 5.99, 2.5, "这是第一个商品，是我在学习Angular的时候创建的", ["电子产品", "图书"]),
      new Product(3, "第三个商品", 3.99, 3.5, "这是第一个商品，是我在学习Angular的时候创建的", ["电子产品", "硬件设备"]),
      new Product(4, "第四个商品", 2.99, 4.5, "这是第一个商品，是我在学习Angular的时候创建的", ["图书", "硬件设备"]),
      new Product(5, "第五个商品", 7.99, 1.5, "这是第一个商品，是我在学习Angular的时候创建的", ["电子产品", "图书"]),
      new Product(6, "第六个商品", 9.99, 2.5, "这是第一个商品，是我在学习Angular的时候创建的", ["电子产品", "硬件设备"]),
    ];
  }

}

export class Product {


  constructor(public i: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
