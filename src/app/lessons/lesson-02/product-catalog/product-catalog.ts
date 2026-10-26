import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
    id: number;
    name: string;
    category: 'Электроника' | 'Аксессуары';
    price: number;
}

type SortOrder = 'asc' | 'desc';

@Component({
    selector: 'app-product-catalog',
    imports: [FormsModule],
    templateUrl: './product-catalog.html',
    styleUrl: './product-catalog.scss'
})
export class ProductCatalog {
    readonly products: Product[] = [
        { id: 1, name: 'Ноутбук', category: 'Электроника', price: 75000 },
        { id: 2, name: 'Мышь', category: 'Аксессуары', price: 2500 },
        { id: 3, name: 'Монитор', category: 'Электроника', price: 23000 },
        { id: 4, name: 'Коврик', category: 'Аксессуары', price: 900 },
        { id: 5, name: 'Клавиатура', category: 'Аксессуары', price: 5800 }
    ];

    search = '';
    category = 'Все';
    sortOrder: SortOrder = 'asc';
    visibleProducts: Product[] = [];
    totalPrice = 0;
    resultCount = 0;

    constructor() {
        this.refresh();
    }

    refresh(): void {
        const query = this.search.trim().toLowerCase();
        this.visibleProducts = this.products
            .filter((product) => product.name.toLowerCase().includes(query))
            .filter((product) => this.category === 'Все' || product.category === this.category)
            .sort((a, b) => this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
        this.resultCount = this.visibleProducts.length;
        this.totalPrice = this.visibleProducts.reduce((sum, product) => sum + product.price, 0);
    }
}
