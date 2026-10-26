import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from './cart/cart';
import { ProductCatalog } from './product-catalog/product-catalog';

@Component({
    selector: 'app-lesson-02',
    imports: [RouterLink, Cart, ProductCatalog],
    templateUrl: './lesson-02.html',
    styleUrl: './lesson-02.scss'
})
export class Lesson02 {}
