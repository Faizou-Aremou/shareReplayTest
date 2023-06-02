import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  get users$() {
    return this.apiService.users$;
  }

  constructor(private apiService: ApiService) {
    this.apiService.get()
  }
  ngOnInit(): void {
  }

  addUser() {
    this.apiService.post({ name: 'random', age: Math.floor(Math.random() * 100), id:5 })
  }
}
