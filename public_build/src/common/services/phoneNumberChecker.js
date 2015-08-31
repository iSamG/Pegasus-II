/**
 * Created by Kaygee on 30/03/2015.
 */


angular.module('bid2winApp.services').service('CheckPhoneNumber', [function(){

    this.verify = function (number) {
        var phone_number = angular.copy(number);
        var dataToReturn = {
            status : true,
            originalNumber  : phone_number,
            numberStartWithZero : '',
            numberInternationalFormat : '',
            message : 'Passed tests'
        };
        if (!(phone_number.length > 9 && phone_number.length < 14)) {
            dataToReturn.message = 'The phone number is incomplete';
            dataToReturn.status = false;
            return dataToReturn;
        }
        if (phone_number.slice(0,4) == '+233') {
            if (phone_number.length == 13) {
                dataToReturn.numberStartWithZero  = '0' + phone_number.slice(4).toString()
            }else{
                dataToReturn.message = 'The phone number is incomplete';
                dataToReturn.status = false;
                return dataToReturn
            }
        }
        else if(phone_number.slice(0,1) == '0') {
            if (phone_number.length == 10) {
                dataToReturn.numberStartWithZero = phone_number;
                dataToReturn.numberInternationalFormat = '+233' + phone_number.slice(1).toString();
            }else if (phone_number.length > 10) {
                dataToReturn.message = 'The phone number has too many characters';
                dataToReturn.status = false;
                return  dataToReturn;
            }else{
                dataToReturn.message = 'The phone number is incomplete';
                dataToReturn.status = false;
                return  dataToReturn;
            }

        }else{
            dataToReturn.message = 'The phone number is invalid';
            dataToReturn.status = false;
            return  dataToReturn;
        }
        //End phone number validation

        return dataToReturn;
    }

}]);