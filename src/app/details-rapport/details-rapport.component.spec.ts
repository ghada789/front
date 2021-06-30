import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRapportComponent } from './details-rapport.component';

describe('DetailsRapportComponent', () => {
  let component: DetailsRapportComponent;
  let fixture: ComponentFixture<DetailsRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
