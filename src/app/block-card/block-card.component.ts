import { Component, Input } from '@angular/core';
import { BlogPage } from '../page';

@Component({
  selector: 'app-block-card',
  templateUrl: './block-card.component.html',
  styleUrls: ['./block-card.component.css']
})
export class BlockCardComponent {
  @Input() cards: [{text: string, title: string}] = [{text: '', title: ''}];
}
