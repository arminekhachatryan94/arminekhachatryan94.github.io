import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  hover_color: string;
  click_color: string;

  constructor() { }

  ngOnInit() {
    this.hover_color = 'rgb(240, 240, 240)';
    this.click_color = 'rgb(221, 221, 221)';
    let path = window.location.pathname;
    if(path == '/') {
      document.getElementById('portfolio').style.backgroundColor = this.click_color;
    } else if(path == '/blog') {
      document.getElementById('blog').style.backgroundColor = this.click_color;
    }
  }

  onClick(name) {
    var hamburger = document.getElementById("hamburger");
    if ( hamburger.className.includes('responsive') ) {
      var bar1 = document.getElementById("bar1");
      var bar2 = document.getElementById("bar2");
      var bar3 = document.getElementById("bar3");
      let index = hamburger.className.indexOf('responsive');
      hamburger.className = hamburger.className.substr(0, index-1) + hamburger.className.substr(index+10, hamburger.className.length);
      bar1.style.webkitTransform = "";
      bar1.style.transform = "";
      bar2.style.opacity = "";
      bar3.style.webkitTransform = "";
      bar3.style.transform = "";
    }
    var items = document.querySelectorAll('#hamburger .nav-item');
    for(let i = 0; i < items.length; i++) {
      if(items[i].firstElementChild.innerHTML == name) {
        items[i].style.backgroundColor = this.click_color;
      } else {
        items[i].style.backgroundColor = "";
      }
    }

  }

  onMouseOver(name) {
    let path = window.location.pathname;
    if(path == '/' && name == 'portfolio') {
      document.getElementById('portfolio').style.backgroundColor = this.click_color;
    } else if(path == '/blog' && name == 'blog') {
      document.getElementById('blog').style.backgroundColor = this.click_color;
    } else {
      document.getElementById(name).style.backgroundColor = this.hover_color;
    }
  }

  onMouseLeave(name) {
    let path = window.location.pathname;
    if(path == '/' && name == 'portfolio') {
      document.getElementById('portfolio').style.backgroundColor = this.click_color;
    } else if(path == '/blog' && name == 'blog') {
      document.getElementById('blog').style.backgroundColor = this.click_color;
    } else {
      document.getElementById(name).style.backgroundColor = "";
    }
  }

  hamburgerBar() {
    var hamburger = document.getElementById("hamburger");
    var bar1 = document.getElementById("bar1");
    var bar2 = document.getElementById("bar2");
    var bar3 = document.getElementById("bar3");
    if ( !hamburger.className.includes('responsive') ) {
      hamburger.className += " responsive";
      bar1.style.webkitTransform = "rotate(-45deg) translate(-5px, 3px)";
      bar1.style.transform = "rotate(-45deg) translate(-5px, 3px)";
      bar2.style.opacity = "0";
      bar3.style.webkitTransform = "rotate(45deg) translate(-6px, -6px)";
      bar3.style.transform = "rotate(45deg) translate(-6px, -6px)";
    } else {
      let index = hamburger.className.indexOf('responsive');
      hamburger.className = hamburger.className.substr(0, index-1) + hamburger.className.substr(index+10, hamburger.className.length);
      bar1.style.webkitTransform = "";
      bar1.style.transform = "";
      bar2.style.opacity = "";
      bar3.style.webkitTransform = "";
      bar3.style.transform = "";
    }
  }
}
