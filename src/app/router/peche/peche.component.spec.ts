import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecheComponent } from './peche.component';

describe('PecheComponent', () => {
  let component: PecheComponent;
  let fixture: ComponentFixture<PecheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecheComponent]
    });
    fixture = TestBed.createComponent(PecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
