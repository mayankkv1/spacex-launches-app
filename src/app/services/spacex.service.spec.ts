import { TestBed } from '@angular/core/testing';
import { SpacexService } from './spacex.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('SpacexService', () => {
  let spacexService: SpacexService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [SpacexService]
    });
    spacexService = TestBed.inject(SpacexService);
  });

  beforeEach(() => {
    spacexService = TestBed.inject(SpacexService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should test service', () => {
    expect(spacexService).toBeTruthy();
  });

  it('should test HttpClient.get', () => {
    spacexService.getLaunces('?limit=100').subscribe((data) => {
        expect(data).not.toBeNull();
    });
  });
});
