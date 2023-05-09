import { Component } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-add-contato',
  templateUrl: './add-contato.component.html',
  styleUrls: ['./add-contato.component.css']
})
export class AddContatoComponent {
  constructor(public db: AngularFireDatabase) {



  }

  addContato() {

    this.db.list("contatos").push("contatos")

    .then( result =>

      console.log(result.key)

    );

  }
}