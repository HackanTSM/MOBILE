import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.page.html',
  styleUrls: ['./hackathon.page.scss'],
})
export class HackathonPage implements OnInit {

  isFavori: boolean[] = [];

  constructor(private navCtrl: NavController) {}

  events = [
    { title: "Description de l'événement1", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg" },
    { title: "Description de l'événement2", imageUrl: "https://minutebag.com/wp-content/uploads/2019/03/images.jpg"},
    { title: "Description de l'événement3", imageUrl: "https://previews.123rf.com/images/kchung/kchung1610/kchung161001354/64508202-test-%C3%A9crit-%C3%A0-la-main-%C3%A9crit-%C3%A0-la-main-%C3%A0-bord-transparent-photo.jpg" }
  ];

  ngOnInit() {
    this.isFavori = new Array(this.events.length).fill(false);
  }

  voirAtelier() {
    this.navCtrl.navigateForward('/atelier');
  }
  // Fonction pour basculer l'état du favori
  toggleFavori(event: Event, index: number) {
    event.stopPropagation(); // Empêche la propagation du clic vers le parent
    this.isFavori[index] = !this.isFavori[index];
  }

  voirFavoris() {
    const favoris = this.getFavoris();
    this.navCtrl.navigateForward('/favoris', { state: { favoris } });
  }

  // Fonction pour obtenir la liste des hackathons favoris
  getFavoris() {
    return this.events.filter((event, index) => this.isFavori[index]);
  }
}
