import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioInfoComponent } from './bio-info.component';

describe('BioInfoComponent', () => {
  let component: BioInfoComponent;
  let fixture: ComponentFixture<BioInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
