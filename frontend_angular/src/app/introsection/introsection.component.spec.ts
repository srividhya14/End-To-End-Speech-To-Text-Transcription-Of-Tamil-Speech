import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrosectionComponent } from './introsection.component';

describe('IntrosectionComponent', () => {
  let component: IntrosectionComponent;
  let fixture: ComponentFixture<IntrosectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrosectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
