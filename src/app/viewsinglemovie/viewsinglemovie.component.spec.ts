import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsinglemovieComponent } from './viewsinglemovie.component';

describe('ViewsinglemovieComponent', () => {
  let component: ViewsinglemovieComponent;
  let fixture: ComponentFixture<ViewsinglemovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsinglemovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsinglemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
