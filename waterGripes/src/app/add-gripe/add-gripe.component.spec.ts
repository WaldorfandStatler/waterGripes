import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGripeComponent } from './add-gripe.component';

describe('AddGripeComponent', () => {
  let component: AddGripeComponent;
  let fixture: ComponentFixture<AddGripeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGripeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
