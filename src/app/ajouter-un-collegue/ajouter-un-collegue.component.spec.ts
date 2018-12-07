import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnCollegueComponent } from './ajouter-un-collegue.component';

describe('AjouterUnCollegueComponent', () => {
  let component: AjouterUnCollegueComponent;
  let fixture: ComponentFixture<AjouterUnCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterUnCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUnCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
