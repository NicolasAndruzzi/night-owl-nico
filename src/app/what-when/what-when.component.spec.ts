import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWhenComponent } from './what-when.component';

describe('WhatWhenComponent', () => {
  let component: WhatWhenComponent;
  let fixture: ComponentFixture<WhatWhenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhatWhenComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
