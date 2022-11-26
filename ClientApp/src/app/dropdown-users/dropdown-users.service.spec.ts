import { TestBed } from '@angular/core/testing';

import { DropdownUsersService } from './dropdown-users.service';

describe('DropdownUsersService', () => {
  let service: DropdownUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
