import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {TestsApiService} from './tests/tests-api.service';
import {Test} from './tests/test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  testsListSubs: Subscription;
  testsList: Test[];

  constructor(private testsApi: TestsApiService) {
  }

  ngOnInit() {
    this.testsListSubs = this.testsApi
      .getTests()
      .subscribe(res => {
          this.testsList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.testsListSubs.unsubscribe();
  }
}