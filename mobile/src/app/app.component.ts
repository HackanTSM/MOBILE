import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/home', icon: 'home' },
    { title: 'Hackathon', url: '/hackathon', icon: 'paper-plane' },
    { title: 'Favorites', url: '/favoris', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    //{ title: 'Trash', url: '/folder/trash', icon: 'trash' },
    //{ title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  constructor() {}
}
