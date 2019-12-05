import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   //template: `<h1>Hello {{title}}</h1>`,
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']

})
export class AppComponent  {

    //name = 'Angular 6 and MVC';
    title = 'ASP.NET aNgular Application';
    description = 'Postgres Database - Angular Client - Django Server - Pandas, MatPlotLib';
    csvoutput = 'Download List in CSV';

}
