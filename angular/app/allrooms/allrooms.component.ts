import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'
import {SearchPipeKV} from 'app/pipe/searchKV';
import {SearchPipeBeds} from 'app/pipe/searchBeds';

@Component({ 
  selector: 'AllRoomsPage', 
  templateUrl: 'app/allrooms/allrooms.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS],
    pipes: [SearchPipeKV, SearchPipeBeds]
})

export class AllRoomsComponent {
    
  loginForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  kvadratura: String ="";
    beds: String ="";
   	rooms: Object[];

  constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	headers.append('token', localStorage.getItem('token'));
	http.get('http://localhost/php/getrooms.php',{headers:headers})
		.map(res => res.json()).share()
		.subscribe(rooms => {this.rooms = rooms.rooms;
            setInterval(function(){
                //noinspection TypeScriptUnresolvedFunction
                $('#example').dataTable({
					paging:false,
                    searching:false
                });
            },200);
		});
		


   
  }

}
