class CallingCard {

    constructor(centsPerMinute){
        this.centsPerMinute = centsPerMinute;
        this.minutes = 0;
    }

    addDollars(dollars){
        this.minutes = Math.floor(this.minutes + ((dollars * 100) / this.centsPerMinute));
    }

    getRemainingMinutes(){
        return this.minutes;
    }

    useMinutes(usedMinutes){
        if(usedMinutes > this.minutes){
            this.minutes = 0;
        }else{
            this.minutes = this.minutes - usedMinutes;
        }
    }



    
}