import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetUsersService } from 'src/app/services/get-users.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { UserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink ,FormsModule , SearchPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _GetUsersService: GetUsersService) {}

  usersPage!: UserData[];
  usersPage2!:UserData[];
  allUsersList!:UserData[]; //page 1 + 2
  searchTerm!:string;


  ngOnInit(): void {
    this._GetUsersService.getPage().subscribe({
      next: (response) => {
        this.usersPage = response.data;
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

  


}
