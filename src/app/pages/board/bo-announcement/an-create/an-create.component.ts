import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MessageService} from "primeng/api";
import {FileUploadEvent} from "primeng/fileupload";

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-an-create',
  templateUrl: './an-create.component.html',
  styleUrls: ['./an-create.component.css']
})
export class AnCreateComponent {
  @Output('onModalClose') modalClose: EventEmitter<any> = new EventEmitter<any>();
  showCreateModal: boolean = false

  constructor(private messageService: MessageService) {}
  closeModal() {
    this.modalClose.emit()
  }

  uploadedFiles: any[] = [];


  onUpload(event: FileUploadEvent) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
