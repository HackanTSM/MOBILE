import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HackathonPage } from './hackathon.page';

describe('HackathonPage', () => {
  let component: HackathonPage;
  let fixture: ComponentFixture<HackathonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HackathonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
