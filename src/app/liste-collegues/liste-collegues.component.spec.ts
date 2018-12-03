import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeColleguesComponent } from './liste-collegues.component';

describe('ListeColleguesComponent', () => {
  let component: ListeColleguesComponent;
  let fixture: ComponentFixture<ListeColleguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeColleguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeColleguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
