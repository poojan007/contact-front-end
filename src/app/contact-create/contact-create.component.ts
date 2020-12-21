import { Component, OnInit } from '@angular/core';
import { Contact, DataService } from '../data.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  name: string;
  description: string;
  email: string;

  contact: Contact;

  constructor(
    private dataService: DataService
  ) {
    this.contact = new Contact();
  }

  ngOnInit() {
  }

  saveContact(){
    this.contact.name = this.name;
    this.contact.description = this.description;
    this.contact.email = this.email;

    this.dataService.postContact(this.contact).subscribe(response => {
      console.log(response);
    });
  }

}
