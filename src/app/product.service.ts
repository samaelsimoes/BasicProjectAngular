import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] = [
    {id: 1, name: "Laptop", department_id: 4, price: 40, description: 'laptop4'},
    {id: 2, name: "Laptop2", department_id: 1, price: 10, description: 'laptop1'},
    {id: 3, name: "Laptop3", department_id: 2, price: 50, description: 'laptop2'},
    {id: 4, name: "Laptop4", department_id: 3, price: 40, description: 'laptop3'},
  ];

  private products: Product[] = [];
  private nextID: number;

  constructor(private departmentService: DepartmentService) {
    for( let p of this.dataFromServer) {
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.id)
      });
      this.nextID = p.id+1;
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(p: Product) {
    this.products.push({id: this.nextID++, ...p});
    console.log(this.products);
  }
}
