import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
      private httpClient: HttpClient
    ) { 
    
  }
  getBooks(name: string ){
    return this.httpClient.get("https://www.googleapis.com/books/v1/volumes?q=" + name)
  }

  getBookByID(id: string){
    return this.httpClient.get('https://www.googleapis.com/books/v1/volumes/' + id)
  }
}
