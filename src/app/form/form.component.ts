import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  book: any;

  constructor(

    private bookservice: SearchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bookservice.getBookByID(String(this.activatedRoute.snapshot.params.id)).subscribe(data =>{
      this.book = data
    })

  }

}
