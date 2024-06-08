import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

interface Product {
  name: string;
  price: number;
  image: string;
  details: string;
  showDetails: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    {
      name: 'Producto 1',
      price: 99,
      image: 'https://via.placeholder.com/150',
      details: 'Detalles del Producto 1',
      showDetails: false
    },
    {
      name: 'Producto 2',
      price: 99,
      image: 'https://via.placeholder.com/150',
      details: 'Detalles del Producto 2',
      showDetails: false
    },
    {
      name: 'Producto 3',
      price: 99,
      image: 'https://via.placeholder.com/150',
      details: 'Detalles del Producto 3',
      showDetails: false
    },
    {
      name: 'Producto 4',
      price: 99,
      image: 'https://via.placeholder.com/150',
      details: 'Detalles del Producto 4',
      showDetails: false
    }
  ];

  addToCart(product: Product) {
    // Lógica para agregar al carrito
    console.log(`${product.name} agregado al carrito.`);
  }

  toggleDetails(product: Product) {
    product.showDetails = !product.showDetails;
  }
}

