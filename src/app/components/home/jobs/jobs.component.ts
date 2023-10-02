import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'iSchoolTech',
      Title: 'Instructor',
      Date: 'Sep 2023 – present',
      Description: [
        'instructor at iSchoolTech, teaching programming to students of various grades remotely',
        'Skilled in delivering engaging lessons and encouraging hands-on learning, ensuring students grasp fundamental programming concepts with enthusiasm',
        
      ]
    },
    {
      Tab: 'Roots Solutions',
      Title: 'Front-end developer',
      Date: 'Jun 2021 - May 2022 (1 year)',
      Description: [
        'Dynamic Forms : The system is able to create forms and allows the user to control validation, input types, design without write code. ',
        'Implementing continuous improvements, working on frontend',
        'Functional programming in templates and plugins to add the necessary monitoring features.'
      ]
    },
    {
      Tab: 'Education',
      Title: 'Software Engineer',
      Date: '2019 — 2023',
      Description: [
        'I graduated from the Faculty of Computers and Information, Kafr El-Sheikh University, Department of Software Engineering',
        'the graduation project is a prescription detection system(Med Match), that automates the process of reading prescriptions either by patients or by pharmacists themselves, additionally users have the ability to order their drugs online through our application.'
      ]
    }
  ];
  active = 0
  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
