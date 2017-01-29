import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Clients {

  constructor(
    public http: Http
  ) {}

  public getData() {
    return this.http.get('/assets/clients.json').map((res) => res.json());
  }

}
