import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flexbox';
  textDefault = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
  image = 'https://picsum.photos/300/200';

  cards = [
    { cardTitle: 'uno', text: this.textDefault },
    { cardTitle: 'dos', text: 'Lorem' },
    { cardTitle: 'tres', text: this.textDefault },
    { cardTitle: 'cuatro', text: 'Lorem' }
  ]

}
