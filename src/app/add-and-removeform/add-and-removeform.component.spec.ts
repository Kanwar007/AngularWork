import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndRemoveformComponent } from './add-and-removeform.component';

describe('AddAndRemoveformComponent', () => {
  let component: AddAndRemoveformComponent;
  let fixture: ComponentFixture<AddAndRemoveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAndRemoveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndRemoveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
