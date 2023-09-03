enum PaymentStatus {
  SUCCESS = "success",
  FAILED = "failed",
}

interface IPayment {
  sum?: number;
  from?: number;
  to?: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IRequestPayment extends IPayment {}

// interface IResponse {
//   status: PaymentStatus;
//   data: IDataFailed | IDataSuccess;
// }

type IResponse =
  | { status: PaymentStatus.SUCCESS; data: IDataSuccess }
  | { status: PaymentStatus.FAILED; data: IDataFailed };

// interface IResponseSuccess {
//   status: PaymentStatus.SUCCESS;
//   data: IDataSuccess;
// }

// interface IResponseFailed {
//   status: PaymentStatus.FAILED;
//   data: IDataFailed;
// }

// function showInfo(): IResponseSuccess | IResponseFailed {}
