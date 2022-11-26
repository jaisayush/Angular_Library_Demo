import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibsComponent } from './test-libs.component';

describe('TestLibsComponent', () => {
  let component: TestLibsComponent;
  let fixture: ComponentFixture<TestLibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLibsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
