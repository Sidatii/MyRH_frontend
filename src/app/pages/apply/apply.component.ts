import { Component } from '@angular/core';
import {routes} from "../../app.routes";
import {DndDirective} from "./dnd.directive";
import {NgForOf} from "@angular/common";
import {Application} from "../../interface/application";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularToastifyModule, ToastService} from "angular-toastify";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ApplicationService} from "../../services/application/application.service";

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [
    DndDirective,
    NgForOf,
    ReactiveFormsModule,
    AngularToastifyModule
  ],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.css'
})
export class ApplyComponent {
  offer: string = "1";
  application: any = [];

  fileList: any[] = [];

  constructor(
    private __toast: ToastService,
    private __activeRoute: ActivatedRoute,
    private __router: Router,
    private _service: ApplicationService,
  )
  {}
  onFileDropped($event: any) {
    for (let file of $event) {
      this.fileList.push(file);
    }
  }
  ngOnInit() {
    routes.forEach(route => {
      console.log(route);
    });
      this.__activeRoute.params.subscribe(({ id }: any) => {
        this.offer = id;
      })
  }

  fileBrowserHandler(files: any) {
    this.fileList = files;
  }

  protected readonly Math = Math;

  removeFile($event: MouseEvent) {
    let index = this.fileList.indexOf($event);
    this.fileList.splice(index, 1);
    this.__toast.success("File removed");
  }

  public applicationForm: FormGroup = new FormGroup({
    fullName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    fileList: new FormControl("", Validators.required),
  });

  public submit() {
    // console.log(this.applicationForm.value)
    const formData = new FormData();
    formData.append("fullName", this.applicationForm.value.fullName);
    formData.append("email", this.applicationForm.value.email);
    formData.append("offer", this.offer);
    for (let file of this.fileList) {
      formData.append("fileList", file);
    }
    console.log(formData.get("fileList"));
    this._service.create(formData).subscribe({
      next: response => {
        this.__router.navigate([""]);
        this.__toast.success("Competition Created Successfully");
      },
      error: (errorResponse) => {
        const {error} = errorResponse;
        console.log(error);
        this.__toast.error("An Error Occurred. Try Again");
      },
      complete: () => {

      }
    });
  }
}
