import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}
  getImage(image: string): string {
    return `${environment.AssetsURL}${image}`;
  }
}
