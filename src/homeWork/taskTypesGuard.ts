enum PayStatus {
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

interface IResponseSuccess {
  status: PayStatus.SUCCESS;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PayStatus.FAILED;
  data: IDataFailed;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;

type Res = IResponseSuccess | IResponseFailed;

function isSuccess(res: Res): res is IResponseSuccess {
  if (res.status === PayStatus.SUCCESS) {
    return true;
  }
  return false;
}

function getIdFormatData(res: Res): number {
  if (isSuccess(res)) {
    return res.data.databaseId;
  } else {
    throw new Error(res.data.errorMessage);
  }
}
