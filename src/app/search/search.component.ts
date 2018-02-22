import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  options: string[];

  formModule :FormGroup;

  constructor(private ps: ProductService) {
    let fb = new FormBuilder(); 
    this.formModule = fb.group({
      title:['',Validators.minLength(3)],
      price:[null,this.positiveValidator],
      category: [-1]
    });
  }

  ngOnInit() {
    this.options = this.ps.getOptions();
  }

  positiveValidator(control:FormControl){
    if(!control.value)
    return null;
    if(control.value > 0){
      return null;
    }else{
      return {positive:{errorMsg:"请输入正数"}};
    }
  }

}
