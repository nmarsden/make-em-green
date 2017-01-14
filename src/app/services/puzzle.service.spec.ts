/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PuzzleService } from './puzzle.service';

describe('PuzzleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuzzleService]
    });
  });

  it('should ...', inject([PuzzleService], (service: PuzzleService) => {
    expect(service).toBeTruthy();
  }));
});
