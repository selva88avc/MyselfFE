import { Component } from '@angular/core';
import { Contact } from '../model/Contact';
import { UserService } from '../services/user.service';
 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 // form conatins the name of the Contact and mobile number
 form: any = {};
 // contacts is to store all Contacts data
 contacts: Contact[] = [];
 contact: Contact=new Contact();
 // message is to  be displayed
 message:string="";
 
 searchText:string="";
 
 
 // isContactedAdded is for validating contact is added or not
 isContactedAdded:boolean=false;
 constructor(private userservice: UserService) {}
 // Call UserService and use getAllContacts method to get Contacts data
   ngOnInit() {
     this.getAllContact();
   }
   getAllContact(){
    this.userservice.getAllContacts().subscribe( data=>this.contacts=data);
   }
   // Write logic to add a Contact by using addContact method of UserService
   // Display message 'Contact already exists' if already a contact exists with same mobile number
   // Display message 'Failed to add Contact' while error handling
   // Display message 'Contact Added' if contact is added
   onSubmit() {
    const index = this.contacts.findIndex(contact=> contact.mobile === this.form.mobile);
    if (index >-1) {
      this.message = 'Contact already exists';
      return;
    }
    // if(this.contacts.map(contact=>contact.mobile).filter(mobile => mobile === this.contact.mobile).length>0){
    //   this.message = 'Contact already exists';
    //   return;
    // }
    // alert("==");
    
    this.userservice.addContact(this.form).subscribe(
      data=> {this.message ="Contact added";
      this.getAllContact();
    }
      ,
      error => this.message = "Failed to add Contact"
    )
   }
}
