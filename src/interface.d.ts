/**
 * 全局暴露
 */
declare namespace Global {
  interface Routes{ 
    key?: string;
    path?: string;
    component?: any;
    exact?: boolean;
    routes?: Route[];
    render?: () => any;
  }

}
