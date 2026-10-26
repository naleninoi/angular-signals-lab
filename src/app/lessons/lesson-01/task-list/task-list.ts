import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

@Component({
    selector: 'app-task-list',
    imports: [FormsModule],
    templateUrl: './task-list.html',
    styleUrl: './task-list.scss'
})
export class TaskList {
    readonly tasks = signal<Task[]>([
        { id: 1, title: 'Learn Angular', completed: true },
        { id: 2, title: 'Learn Signals', completed: false },
        { id: 3, title: 'Refactor legacy code', completed: false }
    ]);

    readonly newTaskTitle = signal('');

    private nextId = 4;

    addTask(): void {
        const title = this.newTaskTitle().trim();

        const titleNotUnique = this.tasks().some(task => task.title.toLowerCase() === title.toLowerCase());

        if (!title || titleNotUnique) {
            return;
        }

        const newTask: Task = {
            id: this.nextId++,
            title,
            completed: false
        };

        this.tasks.update(currentTasks => [...currentTasks, newTask]);

        this.newTaskTitle.set('');
    }

    toggleTask(id: number): void {
        this.tasks.update(currentTasks =>
            currentTasks.map(task => {
                if (task.id !== id) {
                    return task;
                }

                return { ...task, completed: !task.completed };
            })
        );
    }

    removeTask(id: number): void {
        this.tasks.update(currentTasks => currentTasks.filter(task => task.id !== id));
    }

    onNewTaskTitleChange(newTitle: string): void {
        this.newTaskTitle.set(newTitle);
    }
}
