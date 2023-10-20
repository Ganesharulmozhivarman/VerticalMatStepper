import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-stepperflow',
  templateUrl: './stepperflow.component.html',
  styleUrls: ['./stepperflow.component.scss'],
})
export class StepperflowComponent {
  count: number = 0

  @Output() selectedField = new EventEmitter<number>()

  
  onStepChange($event: StepperSelectionEvent) {
    this.count++;
    console.log($event.selectedIndex)
    this.selectedField.emit($event.selectedIndex)
    console.log(this.count)
  } 
}
