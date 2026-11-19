import { Component, effect, signal } from '@angular/core';

type Theme = 'light' | 'dark';
type FontSize = 'small' | 'medium' | 'large';

interface ThemeSettings {
    theme: Theme;
    fontSize: FontSize;
}

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.html',
    styleUrl: './user-settings.scss'
})
export class UserSettings {
    readonly theme = signal<Theme>('light');
    readonly fontSize = signal<FontSize>('medium');

    private readonly storageKey = 'user-settings';

    constructor() {
        effect(() => {
            const theme = this.theme();
            const fontSize = this.fontSize();

            const themeSettings: ThemeSettings = { theme, fontSize };
            localStorage.setItem(this.storageKey, JSON.stringify(themeSettings));
        });

        this.restoreUserSettingsFromStorage();
    }

    setTheme(theme: Theme): void {
        this.theme.set(theme);
    }

    setFontSize(size: FontSize): void {
        this.fontSize.set(size);
    }

    private restoreUserSettingsFromStorage(): void {
        const settingsFromStorage = localStorage.getItem(this.storageKey);
        if (!settingsFromStorage) {
            return;
        }

        const restoredSettings: ThemeSettings = JSON.parse(settingsFromStorage);

        if (restoredSettings.theme) {
            this.setTheme(restoredSettings.theme);
        }

        if (restoredSettings.fontSize) {
            this.setFontSize(restoredSettings.fontSize);
        }
    }
}
