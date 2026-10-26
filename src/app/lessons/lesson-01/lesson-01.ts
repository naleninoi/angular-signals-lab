import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Counter } from './counter/counter';
import { TaskList } from './task-list/task-list';

@Component({
    selector: 'app-lesson-01',
    imports: [RouterLink, Counter, TaskList],
    templateUrl: './lesson-01.html',
    styleUrl: './lesson-01.scss'
})
export class Lesson01 {}
