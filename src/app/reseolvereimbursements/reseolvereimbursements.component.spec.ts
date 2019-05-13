import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseolvereimbursementsComponent } from './reseolvereimbursements.component';

describe('ReseolvereimbursementsComponent', () => {
  let component: ReseolvereimbursementsComponent;
  let fixture: ComponentFixture<ReseolvereimbursementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseolvereimbursementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseolvereimbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
