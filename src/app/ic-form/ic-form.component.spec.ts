import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcFormComponent } from './ic-form.component';

describe('IcFormComponent', () => {
  let component: IcFormComponent;
  let fixture: ComponentFixture<IcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
