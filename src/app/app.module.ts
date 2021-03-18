import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaintComponent } from './paint/paint.component';
import { FabricCanvasComponent } from './paint/fabric-canvas/fabric-canvas.component';
import { GraphicalToolbarComponent } from './paint/toolbar/toolbar.component';
import { ColourPaletteComponent } from './paint/toolbar/colour-palette/colour-palette.component';
import { ThicknessSliderComponent } from './paint/toolbar/thickness-slider/thickness-slider.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EventHandlerService } from './paint/event-handler.service';
import { FabricShapeService } from './paint/shape.service';
@NgModule({
  declarations: [
    AppComponent,
    PaintComponent,
    FabricCanvasComponent,
    GraphicalToolbarComponent,
    ColourPaletteComponent,
    ThicknessSliderComponent,
  ],
  imports: [BrowserModule, InputsModule, BrowserAnimationsModule, FormsModule],
  providers: [EventHandlerService, FabricShapeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
