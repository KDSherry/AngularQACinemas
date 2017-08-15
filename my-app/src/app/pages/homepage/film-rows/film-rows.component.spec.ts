import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmRowsComponent } from './film-rows.component';

describe('FilmRowsComponent', () => {
  let component: FilmRowsComponent;
  let fixture: ComponentFixture<FilmRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
