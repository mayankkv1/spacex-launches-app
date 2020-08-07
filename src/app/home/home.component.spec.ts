import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SpacexService } from '../services/spacex.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let testBedSpacexService: SpacexService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientModule,RouterTestingModule],
      providers: [SpacexService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testBedSpacexService = TestBed.get(SpacexService)
  });

  it('should check the spacex service', () => {
    expect(testBedSpacexService instanceof SpacexService).toBeTruthy();
  });
});
