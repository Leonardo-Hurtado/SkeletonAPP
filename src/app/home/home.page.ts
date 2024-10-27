import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = history.state.username;
  password: string = history.state.password;
  nombre: string = '';
  apellido: string = '';
  nivED: string = '';
  birthdate: Date | null = null;

  constructor(private router: Router, private alertController: AlertController) { }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivED = '';
    this.birthdate = null;
  }

  async mostrarDatos() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: `Su nombre es: ${this.nombre} ${this.apellido}`,
      buttons: ['Yes'],
    });

    await alert.present();
  }

}