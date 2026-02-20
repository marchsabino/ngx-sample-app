import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementsService {
  private readonly BASE_URL = 'https://starter-app.up.railway.app'
  private readonly http = inject(HttpClient);

  latestAnnouncement(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/latest-announcement`);
  }


  whoami(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/whoami`);
  }
}
