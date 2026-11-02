import { Component, computed, signal } from '@angular/core';

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

    readonly subtotal = computed(() => this.items().reduce((sum, item) => sum + item.price * item.quantity, 0));

    readonly totalQuantity = computed(() => this.items().reduce((sum, item) => sum + item.quantity, 0));

    readonly discountAmount = computed(() => (this.subtotal() * this.discountPercent()) / 100);

    readonly total = computed(() => this.subtotal() - this.discountAmount());

    changeQuantity(id: number, delta: number): void {
        this.items.update(currentItems =>
            currentItems.map(item => {
                if (item.id !== id) {
                    return item;
                }

                const updatedQuantity = Math.max(0, item.quantity + delta);
                return { ...item, quantity: updatedQuantity };
            })
        );
    }

    changeDiscount(event: InputEvent): void {
        const input = event.target as HTMLInputElement;
        const inputValue = Number.isFinite(input.valueAsNumber) ? input.valueAsNumber : 0;
        const newDiscount = inputValue < 0 ? 0 : Math.min(inputValue, 100);

        this.discountPercent.set(newDiscount);
    }
}
