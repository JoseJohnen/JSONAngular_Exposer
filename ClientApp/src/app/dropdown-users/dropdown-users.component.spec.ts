import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUsersComponent } from './dropdown-users.component';

describe('DropdownUsersComponent', () => {
  let component: DropdownUsersComponent;
  let fixture: ComponentFixture<DropdownUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
