import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'film-rows',
    templateUrl: './film-rows.component.html',
    styleUrls: ['./film-rows.component.css']
})
export class FilmRowsComponent implements OnInit {
    //films: Array<any> = [];
    @Input() row: number;
    @Input() filmsByDate: Array<any>;

    constructor() {
    }

    ngOnInit() {
        console.log(this.row);
        console.log(this.filmsByDate);
    }
    
}

