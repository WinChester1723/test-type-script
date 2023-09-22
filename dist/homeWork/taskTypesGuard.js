"use strict";
var PayStatus;
(function (PayStatus) {
    PayStatus["SUCCESS"] = "success";
    PayStatus["FAILED"] = "failed";
})(PayStatus || (PayStatus = {}));
function isSuccess(res) {
    if (res.status === PayStatus.SUCCESS) {
        return true;
    }
    return false;
}
function getIdFormatData(res) {
    if (isSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
