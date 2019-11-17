declare module '@enact/spotlight';

declare module '@enact/moonstone/VideoPlayer';
declare module '@enact/moonstone/Panels';
declare module '@enact/moonstone/Scroller';

declare module '@enact/moonstone/VirtualList';
declare module '@enact/ui/Group';
declare module '@enact/ui/Layout';

declare type TypedAction<TActionModule> = {
  [P in keyof TActionModule]: ReturnType<TActionModule[P]>;
}[keyof TActionModule];

declare namespace JSX {
  interface IntrinsicElements {
    infoComponents: any;
    rightComponents: any;
  }
}

declare const __RELEASE__: boolean;

declare type Action<T = any> = {
  type: string;
  payload?: T;
};

declare type Reducer<S, T = any> = (state: S, action: Action<T>) => S;

declare type NumberMap = Map<number, number>;

declare interface IBooleaned {
  [key: string]: boolean;
}

declare interface INormalized<T> {
  entities: T;
  result: number[];
}

declare type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

/**
 * modules
 */

declare module '*.svg' {
  const image: string;
  export default image;
}

declare module '*.png' {
  const image: string;
  export default image;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
  }
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.css' {
  const classes: {[key: string]: string};
  export default classes;
}

declare module '*.less' {
  const classes: {[key: string]: string};
  export default classes;
}

declare module 'uuid';

declare module 'lodash.throttle';

declare module 'redux-saga-testing';

declare module 'videojs-contrib-quality-levels';

declare module 'videojs-http-source-selector';
