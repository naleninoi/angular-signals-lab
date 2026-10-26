import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    imports: [],
    templateUrl: './counter.html',
    styleUrl: './counter.scss',
})
export class Counter {
    // TODO: заменить обычное свойство на signal()
    count = 5;

    increment(): void {
        // TODO: увеличить значение, максимум 10
    }

    decrement(): void {
        // TODO: уменьшить значение, минимум 0
    }

    reset(): void {
        // TODO: сбросить значение до 0
    }
}
