import { Injectable } from "@angular/core";
import { addResizeListener, removeResizeListener } from "../utils";
import { CONFIG } from "../mockup/resize.mockup";

@Injectable({
  providedIn: "root"
})
export class ResizeService implements OnInit, OnDestroy {
  constructor() {
    this.updateSize();
  }

  public showMobile: boolean;
  public showTablet: boolean;
  public showDesktop: boolean;

  public updateSize() {
    console.log("llama");
    const { innerWidth } = window;
    const { mobile, tablet } = CONFIG;
    this.showMobile = innerWidth < mobile;
    this.showTablet = mobile <= innerWidth && innerWidth < tablet;
    this.showDesktop = tablet <= innerWidth;

    return {
      showDesktop: this.showDesktop,
      showTablet: this.showTablet,
      showMobile: this.showMobile
    };
  }

  ngOnInit() {
    addResizeListener(this.updateSize.bind(this));
  }

  ngOnDestroy() {
    removeResizeListener(this.updateSize.bind(this));
  }
}
