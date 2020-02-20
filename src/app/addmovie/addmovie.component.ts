import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss']
})
export class AddmovieComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;

  // interface Movie {
  //   title:string;
  //   image:string;
  //   releasedate:string;
  //   description:string;
  //   comments:Array<Object>
  // }

  constructor(http: HttpClient) { 
    
  }

  ngOnInit(): void {
  }

  test() {
    console.log('fuck')
  }
  //

  //logic for files preview
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

}
