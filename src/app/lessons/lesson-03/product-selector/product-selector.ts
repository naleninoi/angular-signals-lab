import { Component, computed, linkedSignal, signal } from '@angular/core';

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
        { id: 5, name: 'Кресло', category: 'furniture', price: 300 },
        { id: 6, name: 'Кресло-массажер', category: 'electronics', price: 1500 },
        { id: 6, name: 'Кресло-массажер', category: 'furniture', price: 1500 }
    ]);

    readonly category = signal<Category>('electronics');

    readonly availableProducts = computed(() =>
        this.products().filter(product => product.category === this.category())
    );

    // Если предыдущий выбор доступен, сохранить его. Иначе выбрать первый товар.
    // Учесть отсутствие доступных товаров.
    readonly selectedProduct = linkedSignal<Product[], Product | null>({
        source: this.availableProducts,
        computation: (availableProducts, previous) => {
            if (!availableProducts.length) {
                return null;
            }

            const analogueProduct = availableProducts.find(p => p.id === previous?.value?.id);

            return analogueProduct ?? availableProducts[0];
        }
    });

    setCategory(category: Category): void {
        this.category.set(category);
    }

    selectProduct(product: Product): void {
        this.selectedProduct.set(product);
    }

    removeSelectedProduct(): void {
        const selectedProduct = this.selectedProduct();

        if (!selectedProduct) {
            return;
        }

        this.products.update(products => products.filter(p => p.id !== selectedProduct.id));
    }
}
