import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-point-modal',
  templateUrl: './point-modal.component.html',
  styleUrls: ['./point-modal.component.scss'],
})
export class PointModalComponent implements OnInit {

  @Input() title: string;
  @Input() items: any;

  constructor(
    public modal: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modal.dismiss();
  }

}
