import { Component } from '@angular/core';
import { CinemaStore } from "../flux/cinema-store.service";
import { CinemaActions } from "../flux/cinema-actions.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CinemaStore, CinemaActions]
})
export class AppComponent {
  title = 'QA Cinemas';
}
