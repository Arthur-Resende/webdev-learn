import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaHighlightComponent } from './trivia-highlight.component';

describe('HighlightComponent', () => {
  let component: TriviaHighlightComponent;
  let fixture: ComponentFixture<TriviaHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriviaHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriviaHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
