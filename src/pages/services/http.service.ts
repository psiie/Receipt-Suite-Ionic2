import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CameraImage } from '../home/sample-camera-image'; // dummy image
import { Observable } from 'rxjs/Observable';

interface Receipt {
  id: number,
  name: string,
  price: number,
  expires: string
}

@Injectable()
export class HttpService {
  public test: string;
  public listItems;
  // public base64Image: string;
  // public base64ImageRaw: string;

  constructor(public http:Http) {
    // this.base64ImageRaw = CameraImage;
    this.test = 'fresh instance'
  }

  sendImage() {
    if (this.listItems != null) {
      return Observable.of(this.listItems);
    }
    else {
      return this.getData();
    }

  }

  private getData(): Observable<any[]> {
    this.test = 'same instance!';
    return this.http.get('http://development.com:3000/')
      .map(response => <any[]>response.json())
      .do(data => this.listItems = data)
  }

  // getSampleData() {
  //   this.http.get('http://development.com:3000/')
  //     .subscribe(
  //       data => {
  //         console.log(data)
  //       },
  //       error => console.log(error)
  //       )
  // }



  // sendPicture() {
  //   this.debug = 'send button pressed';
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   let body = '{"base64": "' + this.base64ImageRaw + '"}'
  //   console.log('base64Image: ', this.base64Image.length);
  //   // this.http.post('192.168.1.112:3000/', body, options)
  //   this.http.post('http://development.com:3000/', body, options)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.debug = 'pic sent';
  //       },
  //       error => {
  //         console.log(error)
  //         this.debug = 'send pic error';
  //       }
  //       )
  // }


}