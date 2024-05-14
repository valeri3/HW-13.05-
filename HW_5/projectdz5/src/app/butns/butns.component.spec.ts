import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButnsComponent } from './butns.component';

describe('ButnsComponent', () => {
  let component: ButnsComponent;
  let fixture: ComponentFixture<ButnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
