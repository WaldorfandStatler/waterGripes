import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GripeListEntryComponent } from './gripe-list-entry.component';

describe('GripeListEntryComponent', () => {
  let component: GripeListEntryComponent;
  let fixture: ComponentFixture<GripeListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GripeListEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GripeListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
