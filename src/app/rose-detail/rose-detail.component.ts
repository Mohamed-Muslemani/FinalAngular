import {Component, OnInit} from '@angular/core';
import {Rose} from '../Shared/roses';
import {RoseService} from '../services/rose.service';
import {ActivatedRoute} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-rose-detail',
  imports: [NgIf, NgForOf],
  templateUrl: './rose-detail.component.html',
  styleUrl: './rose-detail.component.css'
})
export class RoseDetailComponent implements OnInit {

  rose!: Rose | undefined;


  constructor(private roseService: RoseService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.roseService.getRoseById(id).subscribe((rose) => (this.rose = rose));
  }

}
