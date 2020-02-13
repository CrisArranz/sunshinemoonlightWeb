import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeddiesComponent } from './teddies.component';

describe('TeddiesComponent', () => {
  let component: TeddiesComponent;
  let fixture: ComponentFixture<TeddiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeddiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeddiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
