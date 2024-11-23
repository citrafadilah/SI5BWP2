import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buku } from '../models/buku.model';

@Injectable({
  providedIn: 'root'
})
export class BukuService {
  private url : string ='http://localhost:3000/bukus';

  constructor(private http : HttpClient) { }

  addBuku(judul : string, penulis : string, genre : string[]){
    const buku : Buku = {
      _id : null,
      judul : judul,
      penulis : penulis,
      genre : genre
    }

    console.log(buku);

    this.http.post<{message : string}>(this.url, buku)
    .subscribe((response)=>{
      console.log(response.message)
     });

  }
}
