import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWritterComponent } from './button-writter.component';

describe('ButtonWritterComponent', () => {
  let component: ButtonWritterComponent;
  let fixture: ComponentFixture<ButtonWritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonWritterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonWritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
