import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduloginComponent } from './edulogin.component';

describe('EduloginComponent', () => {
  let component: EduloginComponent;
  let fixture: ComponentFixture<EduloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
