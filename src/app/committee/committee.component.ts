import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

interface user {
  namee: string;
  photo: string;
  phonee: string;
  ideaa: string;
  requestt:string;
  datee: string;
  emaill: string;
}
// ---------------------------------------------------------
interface incubator {
  name: string;
  logo: string;
  phone: string;
  idea: string;
  request:string;
  date: string;
  email: string;
};
// -------------------------------------
interface industry {
  names: string;
  logos: string;
  phones: string;
  ideas: string;
  requests:string;
  dates: string;
  emails: string;
};
// ---------------------------
interface committee {
  namem: string;
  photom: string;
  phonem: string;
  ideam: string;
  requestm:string;
  datem: string;
  emailm: string;
}

const USERS: user[] = [
  {
    namee: 'Jonh Doe',
    photo: 'f/f3/Flag_of_Russia.svg',
    phonee: '0709487332',
    ideaa: 'Idea description',
    requestt: 'Request description',
    datee: '12th May 2022',
    emaill: 'john.doe@vumbua.com',
  },
  {
    namee: 'Joy Lyky',
    photo: 'f/f3/Flag_of_Russia.svg',
    phonee: '0709487332',
    ideaa: 'Idea description',
    requestt: 'Request description',
    datee: '12th May 2022',
    emaill: 'joy.lyky@vumbua.com',
  },
  {
    namee: 'Daudi Kabaka',
    photo: 'f/f3/Flag_of_Russia.svg',
    phonee: '0709487332',
    ideaa: 'Idea description',
    requestt: 'Request description',
    datee: '12th May 2022',
    emaill: 'daudi@vumbua.com',
  },
  {
    namee: 'Kim Joe',
    photo: 'f/f3/Flag_of_Russia.svg',
    phonee: '0709487332',
    ideaa: 'Idea description',
    requestt: 'Request description',
    datee: '12th May 2022',
    emaill: 'kim.joe@vumbua.com',
  }
];
// -----------------------------------------------
const COMMITTEES: committee[] = [
 
  {
    namem: 'Joyce Mend',
    photom: 'f/f3/Flag_of_Russia.svg',
    phonem: '0709009032',
    ideam: 'Idea description',
    requestm: 'Request description',
    datem: '12th May 2022',
    emailm: 'joyce.mend@vumbua.com',
  }

];

// -------------------------------------------------
const INCUBATORS: incubator[] = [
  {
    name: 'iHub',
    logo: 'f/f3/Flag_of_Russia.svg',
    phone: '0709487332',
    idea: 'Idea description',
    request: 'Request description',
    date: '12th May 2022',
    email: 'info@ihub.com',
    
  },
  {
    name: 'iBiz',
    logo: 'c/cf/Flag_of_Canada.svg',
    phone: '0729928373',
    idea: 'Idea description',
    request: 'Request description',
    date: '18th May 2021',
    email: 'ibiz@strathmore.edu'
  },
  {
    name: 'Nailab',
    logo: 'a/a4/Flag_of_the_United_States.svg',
    phone: '07297336662',
    idea: 'Idea description',
    request: 'Request description',
    date: '2nd July 2021',
    email: 'info@nailab.com'
  },
  {
    name: 'Afrilab',
    logo: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    phone: '0701973633',
    idea: 'Idea description',
    request: 'Request description',
    date: '11th November 2021',
    email: 'info@afrilab.com'
  }
];

const INDUSTRIES: industry[] = [

  {
    names: 'KCB Bank Group',
    logos: 'f/f3/Flag_of_Russia.svg',
    phones: '0709487332',
    ideas: 'Idea description',
    requests: 'Request description',
    dates: '1st April 2022',
    emails: 'info@kcbbankgroup.com',
    
  },
  {
    names: 'Kenya Power',
    logos: 'c/cf/Flag_of_Canada.svg',
    phones: '07299285893',
    ideas: 'Idea description',
    requests: 'Request description',
    dates: '18th May 2021',
    emails: 'info@kplc.edu'
  },
  {
    names: 'Kenya Airways',
    logos: 'a/a4/Flag_of_the_United_States.svg',
    phones: '079288472',
    ideas: 'Idea description',
    requests: 'Request description',
    dates: '18th August 2021',
    emails: 'info@kenyaairways.com'
  },
  {
    names: 'KCC',
    logos: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    phones: '0709837533',
    ideas: 'Idea description',
    requests: 'Request description',
    dates: '17th September 2021',
    emails: 'info@kcc.com'
  }


];

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent implements OnInit {

  title = 'vumbuka';
  active = 'top';
  incubators = INCUBATORS;
  industries = INDUSTRIES;
  users = USERS;
  committees =COMMITTEES;
  closeResult = '';
  public isCollapsed = false;

  constructor(private modalService: NgbModal) {}

  //open(content: any) {
    //this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     // this.closeResult = `Closed with: ${result}`;
    //}, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   // });
  //}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  open(content:any) {
    this.modalService.open(content, { scrollable: true });
  }

  ngOnInit(): void {
  }

}
