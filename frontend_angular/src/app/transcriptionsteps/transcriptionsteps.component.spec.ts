import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptionstepsComponent } from './transcriptionsteps.component';

describe('TranscriptionstepsComponent', () => {
  let component: TranscriptionstepsComponent;
  let fixture: ComponentFixture<TranscriptionstepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptionstepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptionstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
