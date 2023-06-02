import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, switchMap, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _users$: Observable<User[]> | undefined;

  get users$() {
    return this._users$;
  }

  constructor(private http: HttpClient) { }
  get(): void {
    this._users$ = this.getUsers()
  }

  post(user: { name: string; age: number; id: number; }) {
    this._users$ = this.http.post<User[]>('http://localhost:3000/users', user).pipe(
      switchMap((val) => this.getUsers()),
      shareReplay({ refCount: true })
    );
  }

  private getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users').pipe(
      shareReplay({ refCount: true})
    );
  }
}
