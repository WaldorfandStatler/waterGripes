import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GripeListComponent } from './gripe-list.component';

describe('GripeListComponent', () => {
  let component: GripeListComponent;
  let fixture: ComponentFixture<GripeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GripeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GripeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
