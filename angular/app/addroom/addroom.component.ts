import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({ 
  selector: 'AddRoom',
  templateUrl: 'app/addroom/addroom.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class AddRoom {

  registerForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
    this.registerForm = builder.group({
     roomName: ["", Validators.none],
     hasTV: ["", Validators.none],
     beds: ["", Validators.none],
     kvadratura: ["", Validators.none]
   });
  }
  
  onAddRoom(): void {
	var data = "roomName="+this.registerForm.value.roomName+"&hasTV="+this.registerForm.value.hasTV+"&beds="+this.registerForm.value.beds+"&kvadratura="+this.registerForm.value.kvadratura;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/php/addroomservice.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
	err =>  {
        this.router.parent.navigate(['./MainPage']);
    }
    );
	
  }
}
