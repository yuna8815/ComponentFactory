import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusculoskeletalInputModalPage } from './musculoskeletal-input-modal.page';

describe('MusculoskeletalInputModalPage', () => {
  let component: MusculoskeletalInputModalPage;
  let fixture: ComponentFixture<MusculoskeletalInputModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MusculoskeletalInputModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusculoskeletalInputModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
