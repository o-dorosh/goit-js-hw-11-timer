const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
    title: document.querySelector('.title')
 }
 
 class CountdownTimer {
    constructor({targetDate}) {
        this.targetDate = targetDate;

        this.init();
        this.dateNow()
    }

    startTimerBack() {

        setInterval(() => {
            const currentTime = Date.now()
            const deltaTime =  this.targetDate - currentTime;
            const {days, hours, mins, secs} = this.getTimeComponents(deltaTime);

          //  console.log(`${days}:${hours}:${mins}:${secs}`);
            this.updateTimer({days, hours, mins, secs})
           
        }, 1000)
    }

    dateNow() {
        const today = this.targetDate;
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        
       // document.write(today);
        refs.title.textContent = `Until ${dd}.${mm} left:`
    }

    init() {
        const currentTime = Date.now()
        const deltaTime =  this.targetDate - currentTime;
        const time = this.getTimeComponents(deltaTime);
        this.updateTimer(time);
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
