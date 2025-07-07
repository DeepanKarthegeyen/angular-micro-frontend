import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apidatacomponent } from './apidatacomponent';

describe('Apidatacomponent', () => {
  let component: Apidatacomponent;
  let fixture: ComponentFixture<Apidatacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apidatacomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Apidatacomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
