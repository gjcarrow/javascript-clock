const DigitalClock = {
    secondHand: document.querySelector('.second-hand'),
    minHand: document.querySelector('.min-hand'),
    hourHand: document.querySelector('.hour-hand'),
    docEl: document.documentElement,
    updateClock() {
      let c = new Date();
      let minutes = +c.getMinutes(),
      seconds = +c.getSeconds(),
      hours = +c.getHours();
      this.docEl.className=(hours>8&&hours<17)?'day':'';
      hours = hours>12?hours-12:hours;
      this.secondHand.style.transform = `rotate(${Math.floor(seconds*6)}deg)`;
      this.minHand.style.transform = `rotate(${Math.floor(minutes*6)}deg)`;
      this.hourHand.style.transform = `rotate(${Math.floor(hours*30+(minutes/2))}deg)`;
      window.requestAnimationFrame(this.updateClock.bind(this));
    },
    init() {
          this.updateClock();
    }
   }
