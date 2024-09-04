import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngDirectives-Form';

  name:string=''
  email:string=''
  address:string=''

  userArray:Array<any>=[];

  onClick(){
    this.userArray.push({
      "name":this.name,
      "email":this.email,
      "address":this.address
    })
    console.log(this.userArray)

  }
  onDelete(index:number){
    this.userArray.splice(index,1)
  }
}
