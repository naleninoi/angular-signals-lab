import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home {
    protected readonly lessons = [
        'Основы Signals',
        'Вычисляемые сигналы',
        'Change Detection',
        'Signal Inputs',
        'Effects и linkedSignal',
        'Signals и RxJS',
        'Управление состоянием',
        'Рефакторинг и тестирование',
    ];
}
