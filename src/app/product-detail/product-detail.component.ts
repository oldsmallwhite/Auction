import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, ProductService, Comment} from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = null;
  comments: Comment[] = [];

  newRate: number = 5;
  newCommont: string = '';

  isCommontHidden: boolean = true;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    const productId: number = this.routeInfo.snapshot.params['id'];
    console.log(productId);
    this.product = this.productService.getProduct(productId);
    console.log(this.product);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  commontSumbmit() {
    var com = new Comment(0, this.product.id, (new Date()).toISOString(), "游客", this.newRate, this.newCommont);
    this.comments.unshift(com);

    var sumRate = this.comments.reduce((sum, commont) => {
      return sum + commont.rating;
    }, 0);
    this.product.rating = sumRate / this.comments.length;

    this.newRate = 5;
    this.newCommont = null;
  }

}
