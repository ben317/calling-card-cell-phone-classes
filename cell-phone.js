class CellPhone {

    constructor(callingCard){
        this.callingCard = callingCard;
        this.callHistory = [];
        this.activeMinutes = 0;
    }

    call(phoneNumber){
        if(!this.activeCallNumber){
            this.activeCallNumber = phoneNumber;
            return true;
        }else{
            return false;
        }
    }

    isTalking(){
        return Boolean(this.activeCallNumber);
    }

    tick(){
        this.activeMinutes = this.activeMinutes + 1;
        card.useMinutes(1);

        if(card.getRemainingMinutes() <= 0){
            var minuteWord = this.activeMinutes > 1? ' minutes)':' minute)';
            this.callHistory.push(this.activeCallNumber + ' (cut off at ' + this.activeMinutes + minuteWord);
            this.activeCallNumber = null;
            this.activeMinutes = 0;
        }
    }

    endCall(){
        var minuteWord = this.activeMinutes > 1? ' minutes)':' minute)';
        this.callHistory.push(this.activeCallNumber + '(' + this.activeMinutes + minuteWord);
        this.activeCallNumber = null;
        this.activeMinutes = 0;
    }

    getHistory(){ 
        if(this.activeCallNumer){
            var minuteWord = this.activeMinutes > 1? ' minutes)':' minute)';
            this.callHistory.push(this.activeCallNumber + ' (' + this.activeMinutes + minuteWord);
            result = this.callHistory.toString();
            this.callHistory.pop();
        }
        if(!result){
            var result = this.callHistory.toString();
        }
        return result;
    }
    
}