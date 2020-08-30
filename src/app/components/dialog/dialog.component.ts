import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Station } from '../../services/station.service';
import { CustomValidators } from '../../custom.validators';

import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { selectSelectedStation } from '../../store/selectors/station.selectors';
import { GetStation } from '../../store/actions/station.actions';
import { AddRequest } from '../../store/actions/request.actions';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  requestType = '0';
  form: FormGroup;
  station: Station;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.route.paramMap.subscribe((params: Params) => {
      this.store.dispatch(new GetStation(params.params.id));
      this.store.pipe(select(selectSelectedStation)).subscribe((data) => {
        this.station = data;
        this.formPatchValues();
      });
    });
  }

  buildForm(): void {
    this.form = new FormGroup({
      requestType: new FormControl('0'),
      operator: new FormControl(null, [Validators.required]),
      website: new FormControl(),
      description: new FormControl(),
      ['socket:type2']: new FormControl(null, [CustomValidators.isNegative]),
      ['socket:yazaki']: new FormControl(null, [CustomValidators.isNegative]),
      ['socket:shuko']: new FormControl(null, [CustomValidators.isNegative]),
      cause: new FormControl(null, [Validators.required]),
    });
  }

  formPatchValues(): void {
    this.form.patchValue({ operator: this.station.properties.operator });
    this.form.patchValue({ website: this.station.properties.website });
    this.form.patchValue({
      description: this.station.properties.description,
    });

    this.form.patchValue({
      ['socket:type2']: +this.station.properties['socket:type2'] || 0,
    });
    this.form.patchValue({
      ['socket:yazaki']: +this.station.properties['socket:yazaki'] || 0,
    });
    this.form.patchValue({
      ['socket:shuko']: +this.station.properties['socket:shuko'] || 0,
    });
  }

  submit(): void {
    const formData = { ...this.form.value };

    const group = {
      0: ['operator', 'website', 'description'],
      1: ['socket:type2', 'socket:yazaki', 'socket:shuko'],
      2: ['cause'],
    };

    const newData = {};
    for (const g of group[this.requestType]) {
      if ('' + formData[g] !== '' + this.station.properties[g]) {
        newData[g] = formData[g];
      }
    }

    const request = {
      id: null,
      stationId: this.station.id,
      type: +formData.requestType,
      data: newData,
    };
    this.store.dispatch(new AddRequest(request));
    this.goBack();
  }

  onRequestTypeChange(event): void {
    this.requestType = event.target.value;
  }

  goBack(): void {
    this.router.navigate(['/all-station']);
  }
}
