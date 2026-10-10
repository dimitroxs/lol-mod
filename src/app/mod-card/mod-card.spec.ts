import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCard } from './mod-card';

describe('ModCard', () => {
  let component: ModCard;
  let fixture: ComponentFixture<ModCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ModCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
