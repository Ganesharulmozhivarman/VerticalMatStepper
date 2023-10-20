import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  currentpage = new BehaviorSubject<number>(0);

  Collected($event:number){

    this.currentpage.next($event)
    console.log(this.currentpage)
  }
  
}
