import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerypageComponent } from './querypage.component';

describe('QuerypageComponent', () => {
  let component: QuerypageComponent;
  let fixture: ComponentFixture<QuerypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuerypageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuerypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
