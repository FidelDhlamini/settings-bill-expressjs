let assert = require("assert");
let settingsBill = require("../settings-bill");

describe('The Bill with settings factory function', function () {


    it('should set the call cost', function () {
        let billWithSettings = settingsBill()
        billWithSettings.setCallCost(1.85);
        assert.equal(1.85, billWithSettings.getCallCost())

        let billWithSettings2 = settingsBill();
        billWithSettings2.setCallCost(2.75);
        assert.equal(2.75, billWithSettings2.getCallCost());
    });

    it('should set the sms cost', function () {
        let billWithSettings = settingsBill()
        billWithSettings.setSmsCost(0.85);
        assert.equal(0.85, billWithSettings.getSmsCost())

        let billWithSettings2 = settingsBill();
        billWithSettings2.setCallCost(2.75);
        assert.equal(2.75, billWithSettings2.getCallCost());
    });

    it('should set the sms and call cost', function () {
        let billWithSettings = settingsBill()
        billWithSettings.setCallCost(2.75);
        billWithSettings.setSmsCost(0.85);

        assert.equal(2.75, billWithSettings.getCallCost())
        assert.equal(0.85, billWithSettings.getSmsCost())

    });

    it('should set the warning level', function () {
        let billWithSettings = settingsBill()
        billWithSettings.setWarningLevel(20);
        assert.equal(20, billWithSettings.getWarningLevel())

    });

    it('should set the critical level', function () {
        let billWithSettings = settingsBill()
        billWithSettings.setCriticalLevel(30);
        assert.equal(30, billWithSettings.getCriticalLevel())

    });

    it('should set the  warning and critical level', function () {
        let billWithSettings = settingsBill()

        billWithSettings.setWarningLevel(15);
        billWithSettings.setCriticalLevel(25);

        assert.equal(15, billWithSettings.getWarningLevel())
        assert.equal(25, billWithSettings.getCriticalLevel())

    });

    // describe('use values', function () {

    //     it('it should be able to use the call cost set', function () {
    //         let billWithSettings = settingsBill()

    //         billWithSettings.setCallCost(2.25);
    //         billWithSettings.setCallCost(0.85);

    //         billWithSettings.makeCall();
    //         billWithSettings.makeCall();


    //         assert.equal(6.75, billWithSettings.getTotalCost())
    //         assert.equal(6.75, billWithSettings.getTotalCallCost())
    //         assert.equal(0.00, billWithSettings.getTotalSmsCost())


    //         //    assert.equal(25, billWithSettings.getCriticalLevel())

    //     });
        

    //     it('it should be able to use the call cost set for 2 calls at 1.35 each', function () {
    //         let billWithSettings = settingsBill()

    //         billWithSettings.setCallCost(1.35);
    //         billWithSettings.setCallCost(1.35);

    //         billWithSettings.makeCall();
    //         billWithSettings.makeCall();


    //         assert.equal(2.70, billWithSettings.getTotalCost());
    //         // assert.equal(2.70, billWithSettings.getTotalCallCost());
    //         // assert.equal(0.00, billWithSettings.getTotalSmsCost());


    //         //    assert.equal(25, billWithSettings.getCriticalLevel())

    //     });







    // });

});