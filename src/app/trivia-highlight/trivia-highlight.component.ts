import { Component, Input } from '@angular/core';
import { IconDefinition, faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trivia-highlight',
  templateUrl: './trivia-highlight.component.html',
  styleUrls: ['./trivia-highlight.component.css']
})
export class TriviaHighlightComponent {
  // input type variable from parent component
  @Input() text = '';
  icon: IconDefinition = faQuestion;

  ngOnInit() {
  }
}
