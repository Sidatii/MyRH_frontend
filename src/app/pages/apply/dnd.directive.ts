import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';
import {ToastService} from "angular-toastify";

@Directive({
  selector: '[appDnd]',
  standalone: true
})
export class DndDirective {

  @HostBinding('class.fileover') fileOver: boolean | undefined;
  @Output() fileDropped = new EventEmitter<unknown>();

  constructor(
    private __toast: ToastService,
  ) { }

  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event']) public ondrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files)
      this.__toast.success("File uploaded");
    }
  }

  @HostListener('click', ['$event']) public onClick(evt: any) {
  }

}
