import {Component, OnInit} from '@angular/core';
import {ActivityService} from './services/activity.service';
import {Activity} from './models/activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  activities: Activity[];
  constructor(private activityService: ActivityService) {
  }

  ngOnInit(): void {
    this.activityService.getSseEvent('http://localhost:8080/data').subscribe(value => this.activities = value);
  }

}
