"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCESS"] = "success";
    PaymentStatus["FAILED"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
// interface IResponseSuccess {
//   status: PaymentStatus.SUCCESS;
//   data: IDataSuccess;
// }
// interface IResponseFailed {
//   status: PaymentStatus.FAILED;
//   data: IDataFailed;
// }
// function showInfo(): IResponseSuccess | IResponseFailed {}
