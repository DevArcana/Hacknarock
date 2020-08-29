import ls from 'local-storage';

let phoneNumber = ls.get('phoneNumber');

const setPhoneNumber = (num) => {
    phoneNumber = num;
    ls.set('phoneNumber', phoneNumber);
}

const getPhoneNumber = () => phoneNumber;

export default {
    setPhoneNumber,
    getPhoneNumber
}