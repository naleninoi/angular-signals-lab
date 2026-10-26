import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.html',
    styleUrl: './counter.scss'
})
export class Counter {
    public readonly count = signal(5);

    increment(): void {
        if (this.count() >= 10) {
            return;
        }
        this.count.update(val => val + 1);
    }

    decrement(): void {
        if (this.count() <= 0) {
            return;
        }
        this.count.update(val => val - 1);
    }

    reset(): void {
        this.count.set(0);
    }
}
