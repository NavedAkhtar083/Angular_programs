import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template:' <div *ngIf="chkif">this is ngIf  example</div> <button (click)="btnclick()">click me </button> <p [ngStyle]="{color:blue}"> welcpome to the shahasoft</p>',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:true
})
export class AppComponent {
  title = 'shaasoft channel';
  data='helo this is angular';
  chkif=true;
  isValid:boolean=true;
blue: any;

btnclick(){
  alert('you cliked me ');

}
changevalue(valid:boolean){
  this.isValid=valid;
}

@HostListener('click') onClick(){
  alert("clicked");

}
}
