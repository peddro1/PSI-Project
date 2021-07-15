import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-first-line',
  templateUrl: './first-line.component.html',
  styleUrls: ['./first-line.component.scss']
})
export class FirstLineComponent implements OnInit {

  sectionBook: any 

  books:any

  books1: any

  books2: any

  books3:any

  books4:any

  constructor(
    private book: SearchService,
    private router : Router
    
    ) { }

  ngOnInit(): void {
    this.getBooks('Game of thrones')
    this.getBooks1('Red Queen')
    this.getBooks2('stephen king')
    this.getBooks3("Maze Runner")
    this.getBooks4('Netflix')
  }

  openBook(id: string){
    this.book.getBookByID(id).subscribe(res=>{
      this.sectionBook = res
    })
  }

  getBooks(name: string){
    this.book.getBooks(name).subscribe(res =>{
      window.document.getElementById("section-Book")?.innerHTML.length
      this.books = (res)
      
    })
  }

  getBooks1(name: string){
    this.book.getBooks(name).subscribe(res =>{
      window.document.getElementById("section-Book")?.innerHTML.length
      this.books1 = (res)
      
    })
  }

  getBooks2(name: string){
    this.book.getBooks(name).subscribe(res =>{
      window.document.getElementById("section-Book")?.innerHTML.length
      this.books2 = (res)
      
    })
  }

  getBooks3(name: string){
    this.book.getBooks(name).subscribe(res =>{
      window.document.getElementById("section-Book")?.innerHTML.length
      this.books3 = (res)
      
    })
  }

  getBooks4(name: string){
    this.book.getBooks(name).subscribe(res =>{
      window.document.getElementById("section-Book")?.innerHTML.length
      this.books4 = (res)
      
    })
  }

  verify(){
    const pai = document.getElementById("section-Book");
    const filho =  pai?.querySelector('.title-book')

    if (filho !== null &&  document.getElementById("section-Book")?.style.display) {
      
    } else {
      //document.getElementById("section-Book")?.style.backgroundColor = "black";
    }
  }

  goToDetails(id: string){
    this.router.navigate(['/detalhe/', id])
  }
}
