import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDataComComponent } from './std-data-com.component';

describe('StdDataComComponent', () => {
  let component: StdDataComComponent;
  let fixture: ComponentFixture<StdDataComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdDataComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdDataComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
