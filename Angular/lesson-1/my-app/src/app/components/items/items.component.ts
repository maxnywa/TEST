import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items:any[]=[
    {
      name: "Salmon - Canned",
      price: "$91.56",
      info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      showReview:false,
      review: [
        {
          name: "Denis",
          text: "Some review text"
        }
      ]
    },
    {
      name: "Canned-Salmon ",
      price: "$91.56",
      info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      showReview:false,
      review: []
    },
    {
      name: "Soup - Beef, Base Mix",
      price: "$126.14",
      info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      showReview:false,
      review: [
        {
          name: "Ivan",
          text: "Some review text"
        },
        {
          name: "Maks",
          text: "Some review text"
        }
      ]
    }];



  constructor() { }

  ngOnInit() {
  }
  deleteToggle(name){
    this.items.forEach((item,index) => {
      if(item.name === name){
        this.items.splice(index,1)
      }
    })
  }

}
