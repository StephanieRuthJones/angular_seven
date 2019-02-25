import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "westeros";

  counter: number = 0;

  season_8: boolean = false;

  characters: string[] = ["Tyrian", "Deanerys", "The Hound", "Aria"]

  bump() {
    this.counter++
  }

  reveal() {
    this.season_8 = !this.season_8
  }

}
