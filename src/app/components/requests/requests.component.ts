import { Component, OnInit } from '@angular/core';
import { Request, RequestType } from '../../store/models/request';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { selectRequestList } from '../../store/selectors/request.selectors';
import * as json from '../../locales/ru-RU.json';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export class RequestsComponent implements OnInit {
  requests: Request[];
  locales: any;
  type = RequestType;

  constructor(private store: Store<IAppState>) {
    this.store.pipe(select(selectRequestList)).subscribe((data) => {
      this.requests = data;
    });
  }

  ngOnInit(): void {
    this.locales = (json as any).default.requestsType;
  }
}
