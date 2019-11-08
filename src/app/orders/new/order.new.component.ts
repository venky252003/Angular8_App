import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { OrderService } from "src/app/services";
import { FormBuilder , FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: "app-order-new",
  templateUrl: "./order.new.component.html"
})
export class OrderNewComponent implements OnInit {
  customerId: number;
  orderForm:FormGroup;
  isValid: boolean = false;
  constructor(
    private service: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}

  ngOnInit(): void {
      this.getParamter();
      this.orderForm = this.formBuilder.group({
          orderId: [0],
          customerId: [this.customerId],
          orderQty: [0, Validators.required],
          product: ['', Validators.required],
          unitPrice: [0, Validators.required]
      })
  }

  submitOrder(){
     this.isValid = true;
     console.log(this.orderForm.value);
     if(this.orderForm.valid){
         this.service.save(this.orderForm.value).subscribe(data=> {
             console.log('Order Saved');
             this.router.navigateByUrl('/orders/list/' + this.customerId);
         }, error => {
             console.log('Error Occured ' + error);
         })
     } 
     else{
         
     }    
  }

  getParamter(): void {
    this.customerId = +this.route.snapshot.paramMap.get("id");   
  }


  goBack(): void {
    this.location.back();
  }
}
