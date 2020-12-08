import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleLecturesComponent } from './schedule-lectures.component';

describe('ScheduleLecturesComponent', () => {
  let component: ScheduleLecturesComponent;
  let fixture: ComponentFixture<ScheduleLecturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleLecturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
