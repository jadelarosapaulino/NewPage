import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiunslideComponent } from './premiunslide.component';

describe('PremiunslideComponent', () => {
  let component: PremiunslideComponent;
  let fixture: ComponentFixture<PremiunslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiunslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiunslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
