import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { map, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IFirstHomeSlider } from 'src/app/shared/interfaces/firstHomeSlider.interface';
import { FirstHomeSliderService } from 'src/app/shared/services/first-home-slider.service';
import { NewFirstHomeSlider } from 'src/app/shared/classes/new-firstHomeSlider.class';

@Component({
  selector: 'app-admin-first-home-slider',
  templateUrl: './admin-first-home-slider.component.html',
  styleUrls: ['./admin-first-home-slider.component.scss']
})
export class AdminFirstHomeSliderComponent implements OnInit {
  adminFirstHomeSlider: Array<IFirstHomeSlider> = [];
  firstHomeSliderName: string;
  newFirstHomeSlider: IFirstHomeSlider;
  editStatus: boolean = false;
  editId: number;


  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadUrl: Observable<string>;
  image: string = null;
  constructor(private afStorage: AngularFireStorage, private firstHomeSliderService: FirstHomeSliderService) { }

  ngOnInit() {
    this.getFirstHomeSlider()
  }


  private getFirstHomeSlider(): void {
    this.firstHomeSliderService.getFirstHomeSlider().subscribe(
      data => {
        this.adminFirstHomeSlider = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  public isAddFirstHomeSlider(): void {
    const newFirstHomeSlider: IFirstHomeSlider = new NewFirstHomeSlider(
      0,
      this.firstHomeSliderName,
      this.image,
    );
    if (this.adminFirstHomeSlider.length >= 1) {
      newFirstHomeSlider.id = this.adminFirstHomeSlider.slice(-1)[0].id + 1;
      this.firstHomeSliderName = '';
      this.image = '';
      this.firstHomeSliderService.addFirstHomeSlider(newFirstHomeSlider).subscribe(
        () => {
          this.getFirstHomeSlider();
        })
    }
    else {
      this.newFirstHomeSlider = {
        id: 0,
        name: this.firstHomeSliderName,
        image: this.image,
      },
        this.adminFirstHomeSlider.push(newFirstHomeSlider)
      this.firstHomeSliderService.addFirstHomeSlider(newFirstHomeSlider).subscribe(
        () => {
          this.getFirstHomeSlider();
        })
      this.firstHomeSliderName = '';
      this.image = '';

    }

  }
  public isDeleteFirstHomeSlider(item: IFirstHomeSlider): void {
    const id = item.id
    this.firstHomeSliderService.delFirstHomeSlider(id).subscribe(
      () => {
        this.getFirstHomeSlider()
      }
    )
  }

  public isEditFirstHomeSlider(item: IFirstHomeSlider): void {
    // console.log(item)
    this.editStatus = true;
    this.firstHomeSliderName = item.name;
    this.image = item.image;
    this.editId = item.id
  }

  public isSaveEditFirstHomeSlider(): void {
    const newFirstHomeSlider: IFirstHomeSlider = new NewFirstHomeSlider(
      this.editId,
      this.firstHomeSliderName,
      this.image

    );
    this.firstHomeSliderName = '';
    this.image = '';
    this.firstHomeSliderService.editFirstHomeSlider(newFirstHomeSlider).subscribe(() => {
      this.getFirstHomeSlider();;
    })
    this.editStatus = false;
  }

  // Завантаження картинки
  public upload(event): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(`images/${id}`);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadUrl = this.ref.getDownloadURL();
        this.downloadUrl.subscribe(url => this.image = url)
      })
    ).subscribe()

  }
}
