import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  get users$() {
    return this.apiService.users$;
  }

  constructor(private apiService: ApiService) {

  }
  ngOnInit(): void {

  }
}
