import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

@Directive({ selector: "[onlyForScreen]" })
export class OnlyForScreenDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  condition: boolean;

  @Input() set onlyForScreen(condition: boolean) {
    this.condition = condition;
  }

  ngOnInit() {
    if (this.condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
