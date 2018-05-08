import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouperInputFormComponent } from './grouper-input-form.component';

describe('GrouperInputFormComponent', () => {
  let component: GrouperInputFormComponent;
  let fixture: ComponentFixture<GrouperInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrouperInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouperInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
