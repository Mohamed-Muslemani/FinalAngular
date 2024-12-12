import {Component, OnInit} from '@angular/core';
import {Rose} from '../Shared/roses'
import {RoseService} from '../services/rose.service';
import {RoseDetailComponent} from '../rose-detail/rose-detail.component';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-rose-list',
  imports: [NgForOf, RouterLink, NgIf],
  templateUrl: './rose-list.component.html',
  styleUrl: './rose-list.component.css',
  standalone: true
})
export class RoseListComponent implements OnInit {

  //Create a local copy of the data to save in component
  roses: Rose[] = [];
  selectedRose: Rose | null = null; //Selected cat to display

  //DI Cat service
  constructor(private roseService: RoseService) {}

  //OnInit to get needed data from service
  ngOnInit(): void {
    this.roseService.getRoses().subscribe((data) => (this.roses = data));
  }

  onSelectCat (rose:Rose): void{
    this.selectedRose = rose;
  }

}
