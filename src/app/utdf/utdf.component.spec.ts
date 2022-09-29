import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtdfComponent } from './utdf.component';

describe('UtdfComponent', () => {
  let component: UtdfComponent;
  let fixture: ComponentFixture<UtdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
