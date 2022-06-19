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
interface educator {
  namet: string;
  logot: string;
  phonet: string;
  ideat: string;
  requestt:string;
  datet: string;
  emailt: string;
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
const EDUCATORS: educator[] = [
  
  {
    namet: 'Strathmore University',
    logot: 'c/cf/Flag_of_Canada.svg',
    phonet: '020 29928373',
    ideat: 'Idea description',
    requestt: 'Macheo project',
    datet: '27th March 2021',
    emailt: 'info@strathmore.edu'
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
    ideas: 'Smart milk collection project',
    requests: 'Request description',
    dates: '17th September 2021',
    emails: 'info@kcc.com'
  }


];

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  title = 'vumbuka';
  active = 'top';
  educators = EDUCATORS;
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