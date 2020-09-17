import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Settings
  activeColor = '#ADD8E6';
  switchDuration = 5;

  // Meta
  isShowSettings = true;
  isTopActive = true;
  lastTimeout;
  lastInterval;

  constructor() {
    this.updateInterval();
  }

  updateInterval() {
    if (this.lastInterval) {
      clearInterval(this.lastInterval);
    }

    this.lastInterval = setInterval(() => {
      this.isTopActive = !this.isTopActive;
    }, this.switchDuration * 1000);
  }

  showSettings() {
    this.isShowSettings = true;

    if (this.lastTimeout) {
      clearTimeout(this.lastTimeout);
    }

    this.lastTimeout = setTimeout(() => {
      this.isShowSettings = false;
      this.lastTimeout = undefined;
    }, 5000);
  }
}
