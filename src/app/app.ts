import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AnnouncementsService} from './services/announcements.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  announcements = inject(AnnouncementsService);
  ngOnInit(): void {
    this.announcements.latestAnnouncement().subscribe(announcements => {
      console.log(announcements);
    })
  }
}
