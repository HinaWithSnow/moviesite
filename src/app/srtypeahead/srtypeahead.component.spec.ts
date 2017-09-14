import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrtypeaheadComponent } from './srtypeahead.component';

describe('SrtypeaheadComponent', () => {
  let component: SrtypeaheadComponent;
  let fixture: ComponentFixture<SrtypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrtypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrtypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
