import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantHighlightComponent } from './important-highlight.component';

describe('HighlightComponent', () => {
  let component: ImportantHighlightComponent;
  let fixture: ComponentFixture<ImportantHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportantHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
