import { Component } from "@angular/core";

@Component({
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css'],
    selector:'app-header',
    standalone:true
})
class HeaderComponent{
message:string = "Student Management App"
sayHello():string {
    return "Hello Students !!"
}
}
export default HeaderComponent