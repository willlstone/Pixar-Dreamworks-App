import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaredInComponent } from './stared-in.component';

describe('StaredInComponent', () => {
  let component: StaredInComponent;
  let fixture: ComponentFixture<StaredInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaredInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaredInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
