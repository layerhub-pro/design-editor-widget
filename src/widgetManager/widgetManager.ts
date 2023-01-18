import { EVENTS } from "./constants";

class WidgetManager {
  public initialized: boolean = false;
  public element: HTMLDivElement | null = null;
  public id: string = "";

  public init = (id: string) => {
    this.id = id;
    this.initialized = false;
    this.initialize();
  };

  public initialize = () => {
    let interval = setInterval(() => {
      const element = document.getElementById(this.id);
      if (element) {
        this.element = element as HTMLDivElement;
        this.initialized = true;
        this.registerEventListeners();
        clearInterval(interval);
      }
    }, 1000);
  };

  public registerEventListeners = () => {
    if (this.element) {
      this.element.addEventListener(EVENTS.EDITOR_EXPORT_TO_JSON, (data) => {
        console.log({ data });
      });
    }
  };

  public on = (type: string, callback: any) => {
    let interval = setInterval(() => {
      if (this.element) {
        console.log("REGISE", type);
        this.element.addEventListener(type, callback);
        clearInterval(interval);
      }
    }, 100);
  };

  public emit = (type: string, data?: Record<any, any>) => {
    if (this.element) {
      console.log("TRIGGERING", type);
      const event = new CustomEvent(type, {
        detail: data,
      });
      this.element.dispatchEvent(event);
    }
  };
}

export default new WidgetManager();
