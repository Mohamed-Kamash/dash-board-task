import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetUsersService } from 'src/app/services/get-users.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { UserData } from 'src/app/interfaces/user-data';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule , RouterLink ,FormsModule , SearchPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _GetUsersService: GetUsersService) {}

  usersPage!: UserData[];
  usersPage2!:UserData[];
  allUsersList!:UserData[]; //page 1 + 2
  searchTerm!:string;

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

    this._GetUsersService.getPage2().subscribe({
      next:(response)=>{
        this.usersPage2 = response.data
        this.allUsersList = this.usersPage.concat(this.usersPage2)
      }
    })
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
