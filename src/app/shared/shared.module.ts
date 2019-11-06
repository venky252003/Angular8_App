import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFormatterPipe } from './nameformatter.pipe';


@NgModule({
    declarations: [NameFormatterPipe],
    imports: [ CommonModule ],
    exports: [NameFormatterPipe]
})
export class SharedModule {}