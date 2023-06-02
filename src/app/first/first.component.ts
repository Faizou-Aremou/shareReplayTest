import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../user';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';
import { SecondComponent } from '../second/second.component';
import { ThirdComponent } from '../third/third.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, SecondComponent, ThirdComponent],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  get users$() {
    return this.apiService.users$;
  }

  constructor(private apiService: ApiService) {

  }
  ngOnInit(): void {
  }

}
