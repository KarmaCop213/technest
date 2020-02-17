export interface Transaction {
  accountId: number;
  confirmedDate: Date;
  orderId: string;
  orderCode: string;
  transactionType: string;
  debit: number;
  credit: number;
  balance: number;
}
