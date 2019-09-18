 function SettingsBill() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    // var BillTtl = 0

    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost) {
        theCallCost = callCost;
    }


    function getCallCost() {
        return theCallCost;
    }


    function setSmsCost(smsCost) {
        theSmsCost = smsCost
    }
    

    function getSmsCost() {
        return theSmsCost
    }

    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }

    function getWarningLevel(){
        return theWarningLevel;
    }

    function setCriticalLevel(warningLevel){
        theCriticalLevel = warningLevel;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function makeCall(){
        callCostTotal += theCallCost;
    }

    function getTotalCost (){

        return callCostTotal + smsCostTotal;
    }

    function getTotalCallCost (){

        return theCallCost;
    }

    function getTotalSmsCost (){

        return 0;   
    }

 





    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
    }
 }

module.exports = SettingsBill;