import { Component, signal } from '@angular/core';

type Theme = 'light' | 'dark';
type FontSize = 'small' | 'medium' | 'large';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.html',
    styleUrl: './user-settings.scss'
})
export class UserSettings {
    readonly theme = signal<Theme>('light');
    readonly fontSize = signal<FontSize>('medium');

    setTheme(theme: Theme): void {
        this.theme.set(theme);
    }

    setFontSize(size: FontSize): void {
        this.fontSize.set(size);
    }

    // TODO: Восстановить настройки из localStorage.
    // TODO: Автоматически сохранять настройки через effect().
}
