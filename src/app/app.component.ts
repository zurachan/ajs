import { AppSettingService } from './services/AppSetting.service';
import { Component, OnInit } from '@angular/core';
import { City } from './model/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private service: AppSettingService) { }

  data: any[] = [];
  ngOnInit(): void {
    let url = '/assets/API.json';
    this.service.getJSON(url).subscribe((res) => {
      this.data = res;
    });
  }
  title = 'ajs';
}
