import { Component, OnInit } from '@angular/core';
import { City } from './model/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: City[] = [
    {
      Id: 1,
      Name: 'Hà Nội',
      Employees: [
        {
          Id: 1,
          Name: 'Nguyễn Văn A',
          Position: 'Trưởng phòng',
        },
        {
          Id: 2,
          Name: 'Nguyễn Văn B',
          Position: 'Nhân viên',
        },
        {
          Id: 3,
          Name: 'Nguyễn Văn C',
          Position: 'Nhân viên',
        },
        {
          Id: 4,
          Name: 'Nguyễn Văn D',
          Position: 'Nhân viên',
        },
      ],
    },
    {
      Id: 2,
      Name: 'Đà Nẵng',
      Employees: [
        {
          Id: 5,
          Name: 'Hoàng Văn E',
          Position: 'Trưởng phòng',
        },
        {
          Id: 6,
          Name: 'Hoàng Văn F',
          Position: 'Nhân viên',
        },
        {
          Id: 7,
          Name: 'Hoàng Văn G',
          Position: 'Nhân viên',
        },
        {
          Id: 8,
          Name: 'Hoàng Văn H',
          Position: 'Nhân viên',
        },
      ],
    },
    {
      Id: 3,
      Name: 'TP Hồ Chí Minh',
      Employees: [
        {
          Id: 9,
          Name: 'Trần Văn J',
          Position: 'Trưởng phòng',
        },
        {
          Id: 10,
          Name: 'Trần Văn K',
          Position: 'Nhân viên',
        },
        {
          Id: 11,
          Name: 'Trần Văn L',
          Position: 'Nhân viên',
        },
        {
          Id: 12,
          Name: 'Trần Văn M',
          Position: 'Nhân viên',
        },
      ],
    },
  ];

  title = 'ajs';
}
