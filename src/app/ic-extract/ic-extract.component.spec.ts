import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcExtractComponent } from './ic-extract.component';

describe('IcExtractComponent', () => {
  let component: IcExtractComponent;
  let fixture: ComponentFixture<IcExtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcExtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
