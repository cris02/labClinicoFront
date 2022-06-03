import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-examenes-por-fecha',
  templateUrl: './examenes-por-fecha.component.html',
  styleUrls: ['./examenes-por-fecha.component.scss']
})
export class ExamenesPorFechaComponent implements OnInit {

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

}
