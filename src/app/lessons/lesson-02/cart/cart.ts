import { Component, signal } from '@angular/core';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

@Component({
    selector: 'app-cart',
    templateUrl: './cart.html',
    styleUrl: './cart.scss'
})
export class Cart {
    readonly items = signal<CartItem[]>([
        { id: 1, name: 'Клавиатура', price: 4500, quantity: 1 },
        { id: 2, name: 'Мышь', price: 2200, quantity: 2 },
        { id: 3, name: 'Монитор', price: 18500, quantity: 1 }
    ]);
    readonly discountPercent = signal(10);

    // TODO: subtotal, totalQuantity, discountAmount, total через computed().

    changeQuantity(id: number, delta: number): void {
        // TODO: изменить количество иммутабельно; не допускать отрицательных значений.
    }

    changeDiscount(event: Event): void {
        // TODO: считать значение input и обновить discountPercent (диапазон 0..100).
    }
}
