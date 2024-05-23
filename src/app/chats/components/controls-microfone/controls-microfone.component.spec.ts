import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsMicrofoneComponent } from './controls-microfone.component';

describe('ControlsMicrofoneComponent', () => {
  let component: ControlsMicrofoneComponent;
  let fixture: ComponentFixture<ControlsMicrofoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlsMicrofoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlsMicrofoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
