import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: any

  books: any

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  searchBook(){
    
    this.searchService.getBooks(String(this.name)).subscribe(res =>{
      this.books = res
      console.log(this.books)
    })
  }

}
