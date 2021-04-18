import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // this object is dynamic.... it comes from an API response. We will know the level of nesting only at runtime
  // So we cannot hardcode clr-dropdown in the template. We will have to construct the clr dropdown at runtime based on the data model
  public objectData = [
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" },
    { type: "string", value: "abc" }
  ];
}
