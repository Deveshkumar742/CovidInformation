import { Component, OnInit } from '@angular/core';
import { INews } from '.././shared/interfaces/INews';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from '../core/services/news.service';

@Component({
  selector: 'latest-news',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.css']
})

/** Dashboard component class. */
export class LatestNewsComponent implements OnInit {

  pageTitle: string = "Latest News";
 
  /**
   * @param toastrService : ToastrService
   */

  newsList: INews[];
  constructor(private newsService: NewsService, private toastrService: ToastrService) {
    
  }

 ngOnInit() {
   this.listAllNews();
 }

 listAllNews() {
   this.newsService.getNewsList().subscribe(data => {
    this.newsList = data;
   });
 }

}