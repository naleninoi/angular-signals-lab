import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './task-list.html',
    styleUrl: './task-list.scss',
    changeDetection: ChangeDetectionStrategy.Eager
})
export class TaskList {
    tasks: Task[] = [
        { id: 1, title: 'Learn Angular', completed: true },
        { id: 2, title: 'Learn Signals', completed: false },
        { id: 3, title: 'Refactor legacy code', completed: false },
    ];

    newTaskTitle = '';

    private nextId = 4;

    addTask(): void {
        const title = this.newTaskTitle.trim();

        if (!title) {
            return;
        }

        this.tasks.push({
            id: this.nextId++,
            title,
            completed: false,
        });

        this.newTaskTitle = '';
    }

    toggleTask(id: number): void {
        const task = this.tasks.find((task) => task.id === id);

        if (task) {
            task.completed = !task.completed;
        }
    }

    removeTask(id: number): void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
}
