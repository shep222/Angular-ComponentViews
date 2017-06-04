import { Component, OnInit,
     Input, ViewEncapsulation,
     OnChanges, SimpleChanges, DoCheck,
     AfterContentInit, AfterContentChecked,
     AfterViewInit, AfterViewChecked, OnDestroy,
     ViewChild, ElementRef, ContentChild
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
    @Input('srvElement') element: {type: string, name: string, content: string};
    @Input() name: string;
    @ViewChild('heading') header: ElementRef;
    @ContentChild ('contentParagraph') parapragph: ElementRef
  constructor() {
      console.log('Contructor called')
  }

  ngOnChanges (changes: SimpleChanges){
console.log('ngOnChanges called')
console.log(changes)
  }

  ngOnInit() {
      console.log('NG ONitit called')
      console.log('TEXT CONTENT:' + this.header.nativeElement.textContent)
      console.log('TEXT CONTENT of Paragraph:' + this.parapragph.nativeElement.textContent)

  }

  ngDoCheck(){
      console.log('CHECK CHECK')
  }

  ngAfterContentInit() {
      console.log('AFTER AFTER')
      console.log('TEXT CONTENT of Paragraph:' + this.parapragph.nativeElement.textContent)

  }

  ngAfterContentChecked () {
      console.log('AFTER CHECKED')
  }

  ngAfterViewInit() {
      console.log('AFTER view AFTER')
      console.log('TEXT CONTENT:' + this.header.nativeElement.textContent)

  }

  ngAfterViewChecked () {
      console.log('AFTER view CHECKED')
  }

  ngOnDestroy () {
      console.log('DESTROY')
  }

}
