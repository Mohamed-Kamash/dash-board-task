import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserService } from 'src/app/services/single-user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
})
export class UserdetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _SingleUserService: SingleUserService
  ) {}

  usersData!: UserData;

  idParam!: number;

  ngOnInit(): void {
    
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.idParam = Number(params.get('id'));
      },
    });

    this._SingleUserService.SingleUserInfo(this.idParam).subscribe({
      next: (response) => {
        this.usersData = response.data
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  
}
