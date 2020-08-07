import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Launch } from '../models/launch';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  launchesBaseUrl: string;

  constructor(private http: HttpClient) {
    this.launchesBaseUrl = 'https://api.spaceXdata.com/v3/launches';
  }


  /** Get: get all launch programs */
  getLaunces(params): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.launchesBaseUrl + params);
  }
}
