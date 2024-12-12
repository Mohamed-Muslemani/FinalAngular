import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseListComponent } from './rose-list.component';

describe('RoseListComponent', () => {
  let component: RoseListComponent;
  let fixture: ComponentFixture<RoseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoseListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
