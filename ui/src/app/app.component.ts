import { Component } from '@angular/core';

import { ApplicationService } from './services/application.service';

@Component({

selector: 'app-root',

templateUrl: './app.component.html',

styleUrls: ['./app.component.scss']

})

export class AppComponent {

title = "";

constructor(private applicationService: ApplicationService) {

applicationService.getApplicationName().subscribe((resp: any) => {

this.title = resp;

})

}

}
