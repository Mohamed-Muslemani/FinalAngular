import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRosesComponent } from './modify-roses.component';

describe('ModifyRosesComponent', () => {
  let component: ModifyRosesComponent;
  let fixture: ComponentFixture<ModifyRosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyRosesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyRosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
