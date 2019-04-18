import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollaborateursComponent } from './list-collaborateurs.component';

describe('ListCollaborateursComponent', () => {
  let component: ListCollaborateursComponent;
  let fixture: ComponentFixture<ListCollaborateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCollaborateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCollaborateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
