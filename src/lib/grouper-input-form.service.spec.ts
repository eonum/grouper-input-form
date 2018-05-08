import { TestBed, inject } from '@angular/core/testing';

import { GrouperInputFormService } from './grouper-input-form.service';

describe('GrouperInputFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrouperInputFormService]
    });
  });

  it('should be created', inject([GrouperInputFormService], (service: GrouperInputFormService) => {
    expect(service).toBeTruthy();
  }));
});
