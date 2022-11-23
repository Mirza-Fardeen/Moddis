import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs";
import { moddisModel } from "./moddis.model";


@Injectable({ providedIn: 'root' })
export class moddisService {

  // ipaddress: "54.242.95.167";
  moddis: moddisModel;
  constructor(private http: HttpClient) { }

  getModdis(platform: string) {

    return this.http.get<moddisModel>(`http://54.196.180.121:8081/request/getDataOneByEquipId/${platform}/`)
      .pipe(map((e: moddisModel) => {

        return e;
      }));
    // .subscribe(e => {
    //   this.moddis = e
    //   console.log(e);
    //   return this.moddis;
    // });
  }
  getMean(platform: string) {

    return this.http.get<moddisModel>(`http://54.196.180.121:8081/request/getDataMeanById/${platform}/`)
      .pipe(map((e: moddisModel) => {

        return e;
      }));

  }
  getWeeklyMean(platform: string) {

    return this.http.get<moddisModel>(`http://54.196.180.121:8081/request/getDataMeanWeekById/${platform}/`)
      .pipe(map((e: moddisModel) => {

        return e;
      }));

  }
  getStandardDeviation(platform: string) {

    return this.http.get<moddisModel>(`http://54.196.180.121:8081/request/getDataStandardDeviationById/${platform}/`)
      .pipe(map((e: moddisModel) => {

        return e;
      }));

  }
  getWeeklyStandardDeviation(platform: string) {

    return this.http.get<moddisModel>(`http://54.196.180.121:8081/request/getDataStandardDeviationWeekById/${platform}/`)
      .pipe(map((e: moddisModel) => {

        console.log(e)
        return e;
      }));

  }

}
