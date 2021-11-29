import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cont(){
    this.router.navigate(['products']);
  }

}
