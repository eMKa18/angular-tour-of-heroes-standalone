import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';


// HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false});

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false });
  })
  .catch((err) => console.error(err));
