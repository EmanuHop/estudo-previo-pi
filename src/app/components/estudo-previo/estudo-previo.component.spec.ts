import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudoPrevioComponent } from './estudo-previo.component';

describe('EstudoPrevioComponent', () => {
  let component: EstudoPrevioComponent;
  let fixture: ComponentFixture<EstudoPrevioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudoPrevioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudoPrevioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
