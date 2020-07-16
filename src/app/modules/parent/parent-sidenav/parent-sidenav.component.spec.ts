import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSidenavComponent } from './parent-sidenav.component';

describe('ParentSidenavComponent', () => {
  let component: ParentSidenavComponent;
  let fixture: ComponentFixture<ParentSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
