import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnChanges {
  @Input() size!: number;
  @Output() sizeChange: EventEmitter<number> = new EventEmitter();

  constructor(private loggerService: LoggerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const c in changes) {
      this.loggerService.log(`Changed: ${changes[c].previousValue} to ${changes[c].currentValue}`);
    }
  }
  
  inc() {
    this.loggerService.log(`Increasing font size by 1`);
    this.updateSize(1);
  }

  dec() {
    this.loggerService.log(`Decreasing font size by 1`);
    this.updateSize(-1);
  }

  updateSize(delta: number) {
    const originalSize: number = Number(this.size);
    this.size = this.size + delta <= 0 ? 1 : this.size + delta;
    this.sizeChange.emit(this.size);
    this.loggerService.log(`Font size updated from ${originalSize} to ${this.size}`);
  }
}
