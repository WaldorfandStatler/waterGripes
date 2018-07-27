import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GripeSearchComponent } from './gripe-search.component';

describe('GripeSearchComponent', () => {
  let component: GripeSearchComponent;
  let fixture: ComponentFixture<GripeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GripeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GripeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
