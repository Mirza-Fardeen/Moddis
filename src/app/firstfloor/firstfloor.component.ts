import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { moddisModel } from '../moddis.model';
import { moddisService } from '../moddis.service';

@Component({
  selector: 'app-firstfloor',
  templateUrl: './firstfloor.component.html',
  styleUrls: ['./firstfloor.component.css']
})
export class FirstfloorComponent implements OnInit, OnDestroy {

  mouseOverEvent = false;
  buttonClicked = false;
  error = null;
  moddisValue: moddisModel = {
    mote_id: undefined,
    location: '',
    platform: ''
  };
  moddisMean: moddisModel = {
    mote_id: undefined,
    location: '',
    platform: ''
  };
  moddisMeanWeek: moddisModel = {
    mote_id: undefined,
    location: '',
    platform: ''
  };
  moddisSTDeviation: moddisModel = {
    mote_id: undefined,
    location: '',
    platform: ''
  };
  moddisSTDeviationWeek: moddisModel = {
    mote_id: undefined,
    location: '',
    platform: ''
  };
  height: 700;
  width: 1000;
  private userSub: Subscription;
  firstfloor: string = './assets/images/firstfloor.jpg'
  constructor(private moddis: moddisService) { }


  ngOnInit() {
    this.userSub = this.moddis.getModdis("106").subscribe(
      e => {
        console.log(e)
      }
    )
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  onClickOne(buttonValue: string) {
    if (this.error == null) {
      this.buttonClicked = true;
      console.log(buttonValue)

      this.userSub = this.moddis.getModdis(buttonValue).subscribe(
        (e: moddisModel) => {
          this.moddisValue = e;
        }
      )

      this.moddis.getMean(buttonValue).subscribe((e: moddisModel) => {
        this.moddisMean = e;
      })
      this.moddis.getStandardDeviation(buttonValue).subscribe((e: moddisModel) => {
        this.moddisSTDeviation = e;
      })
      this.moddis.getWeeklyStandardDeviation(buttonValue).subscribe((e: moddisModel) => {
        this.moddisMeanWeek = e;
      })
      this.moddis.getWeeklyStandardDeviation(buttonValue).subscribe((e: moddisModel) => {
        this.moddisSTDeviationWeek = e;
      })
    }

  }

  onMouseOver(mouseValue: string) {

    this.mouseOverEvent = true;
    this.userSub = this.moddis.getModdis(mouseValue).subscribe(
      (e: moddisModel) => {
        this.moddisValue = e;

        console.log(typeof (e))
      }, error => {
        this.error = error.status;
      }
    );
  }
  onMouseOut() {
    this.mouseOverEvent = false;
    this.error = null;
    // this.moddisValue = null;
    // this.userSub.unsubscribe();
  }

}
