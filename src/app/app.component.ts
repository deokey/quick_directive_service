import { Component } from "@angular/core";
import { ResizeService } from "./shared/services/resize.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title = "CodeSandbox";
  public showMobile: boolean;
  public showTablet: boolean;
  public showDesktop: boolean;
  constructor(private resizeService: ResizeService) {}

  ngOnInit() {
    const { showDesktop, showMobile, showTablet } = this.resizeService;

    this.showDesktop = showDesktop;
    this.showTablet = showTablet;
    this.showMobile = showMobile;
  }
}
