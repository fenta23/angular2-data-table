/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../src/components/body/progress-bar.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
export class Wrapper_ProgressBarComponent {
  context:import0.ProgressBarComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.ProgressBarComponent();
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_ProgressBarComponent_Host:import2.RenderComponentType = (null as any);
class _View_ProgressBarComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _ProgressBarComponent_0_4:Wrapper_ProgressBarComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ProgressBarComponent_Host0,renderType_ProgressBarComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'datatable-progress',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ProgressBarComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ProgressBarComponent_0_4 = new Wrapper_ProgressBarComponent();
    this._appEl_0.initComponent(this._ProgressBarComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._ProgressBarComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ProgressBarComponent) && (0 === requestNodeIndex))) { return this._ProgressBarComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._ProgressBarComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    this._ProgressBarComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ProgressBarComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_ProgressBarComponent_Host === (null as any))) { (renderType_ProgressBarComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ProgressBarComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ProgressBarComponentNgFactory:import9.ComponentFactory<import0.ProgressBarComponent> = new import9.ComponentFactory<import0.ProgressBarComponent>('datatable-progress',viewFactory_ProgressBarComponent_Host0,import0.ProgressBarComponent);
const styles_ProgressBarComponent:any[] = ([] as any[]);
var renderType_ProgressBarComponent:import2.RenderComponentType = (null as any);
class _View_ProgressBarComponent0 extends import1.AppView<import0.ProgressBarComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ProgressBarComponent0,renderType_ProgressBarComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray4(4,'class','progress-linear','role','progressbar'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import4.createRenderElement(this.renderer,this._el_1,'div',new import4.InlineArray2(2,'class','container'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import4.createRenderElement(this.renderer,this._el_3,'div',new import4.InlineArray2(2,'class','bar'),(null as any));
    this._text_6 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_7 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
export function viewFactory_ProgressBarComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.ProgressBarComponent> {
  if ((renderType_ProgressBarComponent === (null as any))) { (renderType_ProgressBarComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_ProgressBarComponent,{})); }
  return new _View_ProgressBarComponent0(viewUtils,parentInjector,declarationEl);
}