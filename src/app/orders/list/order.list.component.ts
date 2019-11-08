import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { OrderService } from "../../services";
import { IOrder } from "../../shared";

@Component({
  selector: "app-order-list",
  templateUrl: "./order.list.component.html"
})
export class OrderListComponent implements OnInit {
  orders: IOrder[] = [];
  customerId: number;

  constructor(
    private service: OrderService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.customerId = +this.route.snapshot.paramMap.get("id");
    this.service
      .get(this.customerId)
      .subscribe((orders: IOrder[]) => (this.orders = orders));
  }

  goBack(): void {
    this.location.back();
  }
}
