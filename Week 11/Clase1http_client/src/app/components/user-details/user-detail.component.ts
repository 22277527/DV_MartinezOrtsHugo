import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink,  ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  user: any ;
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);

  ngOnInit()  {
    const userId = this.route.snapshot.params['id'];
    this.userService.getUserById(userId).subscribe(data => {this.user = data; });
    }
  }


