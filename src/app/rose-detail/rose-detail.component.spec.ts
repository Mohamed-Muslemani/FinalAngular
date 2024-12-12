import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseDetailComponent } from './rose-detail.component';

describe('RoseDetailComponent', () => {
  let component: RoseDetailComponent;
  let fixture: ComponentFixture<RoseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoseDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
