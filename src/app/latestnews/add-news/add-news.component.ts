import { Component, OnInit } from '@angular/core';
import { INews } from 'src/app/shared/interfaces/INews';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddUserComponent implements OnInit {

  user: INews;
  newsForm: FormGroup;

  constructor(public fb: FormBuilder, private router: Router,
    private newsService: NewsService, private toastrService: ToastrService) { }

  ngOnInit() {
      this.newsForm = this.fb.group({
        title: ["", [Validators.required]],
        description: ["", Validators.required],
        summary: ["", [Validators.required]],
        fullNews: ["", Validators.required]
      });
  }

  save(newNews: INews) {
    this.newsService.addNews(newNews).subscribe();
    this.toastrService.success('News added successfully!', 'COVID');
    this.router.navigate(['/latestnews']);
  }
  
}
