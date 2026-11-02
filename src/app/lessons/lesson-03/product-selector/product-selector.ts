import { Component, computed, signal } from '@angular/core';

interface Product {
    id: number;
    name: string;
    category: 'electronics' | 'furniture';
    price: number;
}

type Category = Product['category'];

@Component({
    selector: 'app-product-selector',
    templateUrl: './product-selector.html',
    styleUrl: './product-selector.scss'
})
export class ProductSelector {
    readonly products = signal<Product[]>([
        { id: 1, name: 'Ноутбук', category: 'electronics', price: 1200 },
        { id: 2, name: 'Монитор', category: 'electronics', price: 350 },
        { id: 3, name: 'Клавиатура', category: 'electronics', price: 110 },
        { id: 4, name: 'Стол', category: 'furniture', price: 450 },
        { id: 5, name: 'Кресло', category: 'furniture', price: 300 }
    ]);

    readonly category = signal<Category>('electronics');
    readonly availableProducts = computed(() =>
        this.products().filter(product => product.category === this.category())
    );

    // TODO: Создать selectedProduct через linkedSignal() с source/computation.
    // Если предыдущий выбор доступен, сохранить его. Иначе выбрать первый товар.
    // Учесть отсутствие доступных товаров.

    setCategory(category: Category): void {
        this.category.set(category);
    }

    selectProduct(product: Product): void {
        // TODO: Реализовать ручной выбор через selectedProduct.
    }

    removeSelectedProduct(): void {
        // TODO: Иммутабельно удалить выбранный товар из products.
    }
}
