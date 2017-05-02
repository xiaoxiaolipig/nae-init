import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { TranslateService } from './shared/pipes/translate';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content card-block">
        <ba-content-top *ngIf=""></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer *ngIf="" class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor(private _menuService: BaMenuService,private _translate: TranslateService,) {
  }

  translateMenu (menu) {
    console.log(PAGES_MENU,this._translate.instant('hello world'));
    this.translateLoop(menu);
    console.log(menu);
    return menu;
  }

  translateLoop (parent) {
    let type = this.checkObjectType(parent);
    if(type === 'array') {
      parent.forEach(child=>{
        this.translateLoop(child);
      })
    }
    if(type === 'object' && parent.hasOwnProperty('data')) {
      parent.data.menu.title = this._translate.instant(parent.data.menu.title);
    }
    if(type === 'object' && parent.hasOwnProperty('children')) {
      parent.children.forEach(child=>{
        this.translateLoop(child);
      })
    }
  }

  checkObjectType (obj) {
    if(Object.prototype.toString.call(obj) === '[object Array]') return 'array';
    if(Object.prototype.toString.call(obj) === '[object Object]') return 'object';
    if(Object.prototype.toString.call(obj) === '[object Undefined]') return 'undefined';
    return '';
  }

  ngOnInit() {
    let menu = this.translateMenu(PAGES_MENU);
    this._menuService.updateMenuByRoutes(<Routes>menu);
  }
}
