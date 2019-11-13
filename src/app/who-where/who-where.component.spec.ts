import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWhereComponent } from './who-where.component';

describe('WhoWhereComponent', () => {
  let component: WhoWhereComponent;
  let fixture: ComponentFixture<WhoWhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhoWhereComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
