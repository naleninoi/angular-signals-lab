import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-legacy-search',
    imports: [FormsModule],
    templateUrl: './legacy-search.html',
    styleUrl: './legacy-search.scss'
})
export class LegacySearch implements OnInit, OnDestroy {
    query = '';
    results: string[] = [];
    debugMode = false;
    loading = false;

    private searchTimeout?: ReturnType<typeof setTimeout>;

    private readonly products = [
        'Angular', 'React', 'Vue', 'Svelte', 'TypeScript', 'JavaScript'
    ];

    ngOnInit(): void {
        this.scheduleSearch();
    }

    onQueryChange(value: string): void {
        this.query = value;
        this.scheduleSearch();
    }

    onDebugChange(value: boolean): void {
        this.debugMode = value;
    }

    private scheduleSearch(): void {
        clearTimeout(this.searchTimeout);
        this.loading = true;
        this.searchTimeout = setTimeout(() => {
            const normalizedQuery = this.query.trim().toLowerCase();
            this.results = this.products.filter(product =>
                product.toLowerCase().includes(normalizedQuery)
            );
            this.loading = false;
            if (this.debugMode) {
                console.log('Search:', this.query);
            }
        }, 500);
    }

    ngOnDestroy(): void {
        clearTimeout(this.searchTimeout);
    }
}
