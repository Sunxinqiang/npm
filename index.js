var mobileRex = "^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$";

function mobileValidate(mobile) {
    if ((mobile+'').match(mobileRex)) {
        return true;
    } else {
        return false;
    }
}

exports.mobileValidate = mobileValidate;