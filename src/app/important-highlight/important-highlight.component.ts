import { Component, Input } from '@angular/core';
import { IconDefinition, faExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-important-highlight',
  templateUrl: './important-highlight.component.html',
  styleUrls: ['./important-highlight.component.css']
})
export class ImportantHighlightComponent {
  // input type variable from parent component
  @Input() text = '';
  icon: IconDefinition = faExclamation;

  ngOnInit() {
  }
}
