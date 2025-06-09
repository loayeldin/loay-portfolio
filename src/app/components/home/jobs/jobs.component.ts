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
      Tab: 'Codxi',
      Title: 'Frontend React.js ',
      Date: 'Apr 2025 – present',
      Description: [
        'Implemented new CRM features such as lead tracking, user role management, Dashboards, and activity logs based on client feedback',
        'Used Tailwind CSS and Ant Design to maintain a consistent and modern UI',
        'Diagnosed and resolved bugs, optimized component re-renders, and ensured code reusability'        
      ]
    },
    {
      Tab: 'Career180(Intern)',
      Title: 'Frontend React Intern',
      Date: 'Oct 2024 – Dec 2024',
      Description: [
        'Collaborated on developing responsive and user-friendly web interfaces using React & Next.js',
        'Gained hands-on experience with React hooks, context API, and functional components',
        'Worked on improving project workflows by integrating tools like Redux and implementing reusable components'        
      ]
    },
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
      Tab: 'Freelance Work',
      Title: 'Angular Developer',
      Date: '2023',
      Description: [
        `we designed and developed a comprehensive online platform for the Faculty of Commerce with Dr.Ahmed Elahsry, streamlining the application process for master's and professional diploma programs`,
        `This platform enables students to submit applications online and provides realtime application status tracking until final approval`,
        `It also facilitates efficient file uploads and processing by staff, ultimately leading to student acceptance`,
        `Additionally, the system allows accepted students to view available subjects within their chosen diploma and select their preferred courses`
      
      
      
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
    },


    



  ];
  active = 0
  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
