import {Component, inject, OnInit} from '@angular/core';
import {AnnouncementsService} from '../../services/announcements.service';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test implements OnInit{
  announcements = inject(AnnouncementsService);
  ngOnInit(): void {
    this.announcements.latestAnnouncement().subscribe(announcements => {
      console.log('i be here');
      console.log(announcements);
    })
  }
}
