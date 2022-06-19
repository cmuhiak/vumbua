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
    names: 'ABSA Bank Group',
    logos: 'f/f3/Flag_of_Russia.svg',
    phones: '+254(732)130120',
    ideas: 'Street Kids in Tech',
    requests: 'Nyumba Yangu Initiative',
    dates: '1st April 2022',
    emails: 'absa.kenya@absa.africa',
    
  }

];

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  title = 'vumbuka';
  active = 'top';
  incubators = INCUBATORS;
  industries = INDUSTRIES;
  users = USERS;
  closeResult = '';
  public isCollapsed = false;

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

}
