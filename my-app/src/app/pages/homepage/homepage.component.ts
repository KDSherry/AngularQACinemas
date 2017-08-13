import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
    items: Array<any> = [];
    movRow1: Array<string> = [];
    movRow2: Array<string> = [];

    constructor(private ngxSiemaService: NgxSiemaService){
        this.items = [
            { name: '../../../assets/images/carousel/2001.jpg' },
            { name: '../../../assets/images/carousel/interstellar.jpg' },
            { name: '../../../assets/images/carousel/sc.jpg' }
        ];
    }

    ngOnInit(){

    }

    options: NgxSiemaOptions = {
        selector: '.siema',
    };

    prev() {
        this.ngxSiemaService.prev(1)
            .subscribe((data: any) => console.log(data));
    }

    next() {
        this.ngxSiemaService.next(1)
            .subscribe((data: any) => console.log(data));
    }

    goTo() {
        this.ngxSiemaService.goTo(1)
            .subscribe((data: any) => console.log(data));
    }
}
