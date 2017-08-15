import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'film-rows',
    templateUrl: './film-rows.component.html',
    styleUrls: ['./film-rows.component.css']
})
export class FilmRowsComponent implements OnInit {

    @Input() row: number;

    constructor() {

    }

    ngOnInit() {

    }
    
}
