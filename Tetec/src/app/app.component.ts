import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Calendário',
      url: '/calendario',
      icon: 'calendar'
    },
    {
      title: 'Cardápio',
      url: '/cardapio',
      icon: 'pizza'
    },
    {
      title: 'Notificações',
      url: '/notificacoes',
      icon: 'notifications'
    },
    {
      title: 'Configuração',
      url: '/config',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('home');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
