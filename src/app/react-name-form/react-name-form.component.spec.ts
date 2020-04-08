import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactNameFormComponent } from './react-name-form.component';

describe('ReactNameFormComponent', () => {
  let component: ReactNameFormComponent;
  let fixture: ComponentFixture<ReactNameFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactNameFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
