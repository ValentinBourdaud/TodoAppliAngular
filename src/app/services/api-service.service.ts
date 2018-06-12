import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

const API_BASE_URL: string = 'localhost:3000/';
const API_TODOS: string = 'todos/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getTodos() {
    return this.http.get(`${API_BASE_URL}${API_TODOS}`);
    }

}
