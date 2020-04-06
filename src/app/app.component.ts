import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  min = 0;
  max = 2000;
  step = 1;
  disabled = false;
  prefix = '$';
  titleActive = '¿Tus ingresos aproximados?';

  public valuesChange(value: number) {
    console.log(value);
  }

}
