import { IFrame, IScene } from "@layerhub-pro/types";

export interface IDesign {
  id: string;
  name: string;
  frame: IFrame;
  type: string;
  scenes: IScene[];
  previews: { id: string; src: string }[];
  metadata: {};
  published?: boolean;
}

export interface IComponent extends IScene {
  published: boolean;
}

export interface Payload {
  type: string;
  data: any;
}

export interface FontItem {
  name: string;
  url: string;
}
