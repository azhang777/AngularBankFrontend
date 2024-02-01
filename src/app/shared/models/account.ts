export class Account {
  id: number;
  customerId: number;
  type: string;
  balance: number;
  nickname: string;
  rewardPoints: number;

  constructor(
    id: number,
    customerId: number,
    type: string,
    balance: number,
    nickname: string,
    rewardPoints: number
  ) {
    id = 0;
    this.customerId = customerId;
    this.type = type;
    this.balance = balance;
    this.nickname = nickname;
    this.rewardPoints = rewardPoints;
  }
}
