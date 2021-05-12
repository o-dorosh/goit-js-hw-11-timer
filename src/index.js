const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-action="mins"]'),
    secs: document.querySelector('[data-action="secs"]')
 }
 
 class CountdownTimer {
    constructor({targetDate}) {
        this.targetDate = targetDate;
    }

    startTimerBack() {

        setInterval(() => {
            const currentTime = Date.now()
            const deltaTime =  this.targetDate - currentTime;
            const {days, hours, mins, secs} = this.getTimeComponents(deltaTime);

            console.log(`${days}:${hours}:${mins}:${secs}`);
            this.updateTimer({days, hours, mins, secs})
           
        }, 1000)
    }

    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
        return {days, hours, mins, secs};
    };

    pad(value) {
        return String(value).padStart(2, '0')
    }

    updateTimer({days, hours, mins, secs}) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
}
};

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Sep 01, 2021'),
  });

timer.startTimerBack();
