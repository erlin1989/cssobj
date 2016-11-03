// cssobj definition

declare namespace CssObj {
    interface Options {
      local?: boolean | LocalOption;
      cssom?: cssomOption;
      plugins?: any[];
    }

    interface cssomOption {
        frame?: any,
        prefixes?: string[],
        name?: string,
        attrs?: Object,
        noMedia?: boolean
    }

    interface LocalOption {
      prefix?: string;
      localNames?: Object;
    }

    interface HTMLStyleElement {
      id?: string;
      className?: string;
      sheet?: Object;
      styleSheet?: Object;
      media?: string;
    }

    interface Node {
      children: Object;
      diff?: Object;
      lastVal?: Object;
      parentRule: any;
      prevVal: any;
      prop: Object;
    }

    interface Result {
      update (data?: any): Result;
      cssom: HTMLStyleElement;
      data: Object;
      nodes: Node[];
      obj: Object;
      options: Options;
      ref: Object;
      root: Node;
    }

    interface Static {
        (obj: Object, options?: Options, data?: any): Result;
    }
}

declare module 'cssobj' {
    const cssobj: CssObj.Static
    export = cssobj
}
