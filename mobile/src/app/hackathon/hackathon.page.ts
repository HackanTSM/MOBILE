import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.page.html',
  styleUrls: ['./hackathon.page.scss'],
})
export class HackathonPage implements OnInit {

  isFavori: boolean[] = [];
  HackathonFiltres: any = [];

  constructor(private navCtrl: NavController, private router:Router) {

    const apiUrl = `http://192.168.66.20:3000/hackathon`; 
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        this.events = data;
        if (data && Array.isArray(data)) {
          this.HackathonFiltres = data;
        } else {
          console.error('Erreur', data);
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données API', error);
      });
  }
  events:any = [];
  /*events = [
    { title: "Description de l'événement1", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg" },
    { title: "Description de l'événement2", imageUrl: "https://minutebag.com/wp-content/uploads/2019/03/images.jpg"},
    { title: "Description de l'événement3", imageUrl: "https://previews.123rf.com/images/kchung/kchung1610/kchung161001354/64508202-test-%C3%A9crit-%C3%A0-la-main-%C3%A9crit-%C3%A0-la-main-%C3%A0-bord-transparent-photo.jpg" }
  ];*/

  ngOnInit() {
    this.isFavori = new Array(this.events.length).fill(false);
  }

  voirAtelier(evnt:any) {

    let navigationExtras: NavigationExtras = {
      state : {
        param1: evnt
      }
    };
    this.router.navigate(['/atelier'],navigationExtras);
  }

  toggleFavori(event: Event, index: number) {
    event.stopPropagation(); // Empêche la propagation du clic vers le parent
    this.isFavori[index] = !this.isFavori[index];
  }

  voirFavoris() {
    const favoris = this.getFavoris();
    this.navCtrl.navigateForward('/favoris', { state: { favoris } });
  }

  getFavoris() {
    //return this.events.filter((event, index) => this.isFavori[index]);
  }


}
