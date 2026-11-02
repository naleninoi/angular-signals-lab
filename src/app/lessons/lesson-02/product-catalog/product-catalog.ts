import { Component, computed, signal } from '@angular/core';
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
    readonly products = signal<Product[]>([
        { id: 1, name: 'Ноутбук', category: 'Электроника', price: 75000 },
        { id: 2, name: 'Мышь', category: 'Аксессуары', price: 2500 },
        { id: 3, name: 'Монитор', category: 'Электроника', price: 23000 },
        { id: 4, name: 'Коврик', category: 'Аксессуары', price: 900 },
        { id: 5, name: 'Клавиатура', category: 'Аксессуары', price: 5800 }
    ]);

    readonly search = signal('');

    readonly category = signal('Все');

    readonly sortOrder = signal<SortOrder>('asc');

    readonly visibleProducts = computed<Product[]>(() => {
        const query = this.search().trim().toLowerCase();
        const selectedCategory = this.category();
        const order = this.sortOrder();

        return this.products()
            .filter(product => product.name.toLowerCase().includes(query))
            .filter(product => selectedCategory === 'Все' || product.category === selectedCategory)
            .sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price));
    });

    readonly resultCount = computed(() => this.visibleProducts().length);

    readonly totalPrice = computed(() =>
        this.visibleProducts().reduce((sum, product) => sum + product.price, 0));

    constructor() {}

    onQueryChange(query: string): void {
        this.search.set(query);
    }

    onCategoryChange(category: string): void {
        this.category.set(category);
    }

    onSortingChange(sortOrder: SortOrder): void {
        this.sortOrder.set(sortOrder);
    }
}
