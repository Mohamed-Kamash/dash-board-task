import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetUsersService } from 'src/app/services/get-users.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { UserData } from 'src/app/interfaces/user-data';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule , RouterLink , HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _GetUsersService: GetUsersService) {}

  usersPage!: UserData[];

  // pagination properties
  totalItems!: number;
  pageSize!: number;
  currentPage!: number;

  ngOnInit(): void {
    this._GetUsersService.getPage().subscribe({
      next: (response) => {
        this.usersPage = response.data;
        this.totalItems = response.total;
        this.pageSize = response.per_page;
        this.currentPage = response.page;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  // pagination settings
  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;

    this._GetUsersService.getPage(this.currentPage).subscribe({
      next: (response) => {
        this.usersPage = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
