import { Component } from '@angular/core';
import { Joke } from './models/joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jokes: Joke[] = [
    new Joke("Suger-free", "What do you call someone who can't stick with a diet?","A desserter."),
    new Joke("That's deep", "All these sea monster jokes are just Kraken me up.", ""),
    new Joke("LOL-ing in the deep", "My computer suddenly started belting out \"Someone Like You.\"","It's a Dell")   
  ];
  selectedJoke: Joke;
  selectedJokeIndex: number;
  refreshInterval: number;

  constructor () {
    this.selectNewJoke();
    this.refreshInterval = 10000;
    setInterval(() => { this.selectNewJoke(); }, this.refreshInterval);
    
  }

  selectNewJoke() {
    this.selectedJokeIndex = this.generateRandomInteger(0,2);
    this.selectedJoke = this.jokes[this.selectedJokeIndex];
  }

  generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max+1 - min))
  }
}
