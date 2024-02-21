import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {
  priceList = [
    { produkt: 'Maly pies (do 10kg)', cena: 80.00, dog: "/assets/maly.jpeg "},
    { produkt: 'Sredni pies (do 20kg)', cena: 100.00, dog: "/assets/sredni.jpg"},
    { produkt: 'Duzy pies (powyzej 20kg)', cena: 120.00, dog: "/assets/duzy.jpg" },
    { produkt: 'Kot', cena: 100.00, dog: "/assets/kot.jpg" },
    { produkt: 'Krolik/chomik', cena: 50.00, dog: "/assets/krolik.jpg" },
    { produkt: 'Dopłata do pokoju standard', cena: 50.00, dog: "/assets/standard.jpg" },
    { produkt: 'Dopłata do pokoju premium', cena: 80.00, dog: "/assets/premium2.jpg" },
  ];

}
