import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/user';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }

    ngOnInit(): void {
    }
  
}