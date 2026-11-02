import { Component } from '@angular/core';
import { UserSettings } from './user-settings/user-settings';
import { ProductSelector } from './product-selector/product-selector';
import { LegacySearch } from './legacy-search/legacy-search';

@Component({
    selector: 'app-lesson-03',
    imports: [UserSettings, ProductSelector, LegacySearch],
    templateUrl: './lesson-03.html',
    styleUrl: './lesson-03.scss'
})
export class Lesson03 {}
