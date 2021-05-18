// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Treasury extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Treasury entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Treasury entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Treasury", id.toString(), this);
  }

  static load(id: string): Treasury | null {
    return store.get("Treasury", id) as Treasury | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bondDeposits(): Array<string> {
    let value = this.get("bondDeposits");
    return value.toStringArray();
  }

  set bondDeposits(value: Array<string>) {
    this.set("bondDeposits", Value.fromStringArray(value));
  }

  get bondWithdrawals(): Array<string> {
    let value = this.get("bondWithdrawals");
    return value.toStringArray();
  }

  set bondWithdrawals(value: Array<string>) {
    this.set("bondWithdrawals", Value.fromStringArray(value));
  }

  get daiBondTotalDeposit(): BigDecimal | null {
    let value = this.get("daiBondTotalDeposit");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set daiBondTotalDeposit(value: BigDecimal | null) {
    if (value === null) {
      this.unset("daiBondTotalDeposit");
    } else {
      this.set(
        "daiBondTotalDeposit",
        Value.fromBigDecimal(value as BigDecimal)
      );
    }
  }

  get ohmDaiSlpTotalDeposit(): BigDecimal | null {
    let value = this.get("ohmDaiSlpTotalDeposit");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set ohmDaiSlpTotalDeposit(value: BigDecimal | null) {
    if (value === null) {
      this.unset("ohmDaiSlpTotalDeposit");
    } else {
      this.set(
        "ohmDaiSlpTotalDeposit",
        Value.fromBigDecimal(value as BigDecimal)
      );
    }
  }

  get daiBalance(): BigDecimal | null {
    let value = this.get("daiBalance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set daiBalance(value: BigDecimal | null) {
    if (value === null) {
      this.unset("daiBalance");
    } else {
      this.set("daiBalance", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get ohmDaiSlpBalance(): BigDecimal | null {
    let value = this.get("ohmDaiSlpBalance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set ohmDaiSlpBalance(value: BigDecimal | null) {
    if (value === null) {
      this.unset("ohmDaiSlpBalance");
    } else {
      this.set("ohmDaiSlpBalance", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}

export class Ohmie extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Ohmie entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Ohmie entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Ohmie", id.toString(), this);
  }

  static load(id: string): Ohmie | null {
    return store.get("Ohmie", id) as Ohmie | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bondDeposits(): Array<string> {
    let value = this.get("bondDeposits");
    return value.toStringArray();
  }

  set bondDeposits(value: Array<string>) {
    this.set("bondDeposits", Value.fromStringArray(value));
  }

  get bondWithdrawals(): Array<string> {
    let value = this.get("bondWithdrawals");
    return value.toStringArray();
  }

  set bondWithdrawals(value: Array<string>) {
    this.set("bondWithdrawals", Value.fromStringArray(value));
  }

  get sentOhmTransactions(): Array<string> {
    let value = this.get("sentOhmTransactions");
    return value.toStringArray();
  }

  set sentOhmTransactions(value: Array<string>) {
    this.set("sentOhmTransactions", Value.fromStringArray(value));
  }

  get receivedOhmTransactions(): Array<string> {
    let value = this.get("receivedOhmTransactions");
    return value.toStringArray();
  }

  set receivedOhmTransactions(value: Array<string>) {
    this.set("receivedOhmTransactions", Value.fromStringArray(value));
  }

  get sentSohmTransactions(): Array<string> {
    let value = this.get("sentSohmTransactions");
    return value.toStringArray();
  }

  set sentSohmTransactions(value: Array<string>) {
    this.set("sentSohmTransactions", Value.fromStringArray(value));
  }

  get receivedSohmTransactions(): Array<string> {
    let value = this.get("receivedSohmTransactions");
    return value.toStringArray();
  }

  set receivedSohmTransactions(value: Array<string>) {
    this.set("receivedSohmTransactions", Value.fromStringArray(value));
  }

  get daiBondTotalDeposit(): BigDecimal | null {
    let value = this.get("daiBondTotalDeposit");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set daiBondTotalDeposit(value: BigDecimal | null) {
    if (value === null) {
      this.unset("daiBondTotalDeposit");
    } else {
      this.set(
        "daiBondTotalDeposit",
        Value.fromBigDecimal(value as BigDecimal)
      );
    }
  }

  get ohmDaiSlpTotalDeposit(): BigDecimal | null {
    let value = this.get("ohmDaiSlpTotalDeposit");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set ohmDaiSlpTotalDeposit(value: BigDecimal | null) {
    if (value === null) {
      this.unset("ohmDaiSlpTotalDeposit");
    } else {
      this.set(
        "ohmDaiSlpTotalDeposit",
        Value.fromBigDecimal(value as BigDecimal)
      );
    }
  }

  get ohmBalance(): BigDecimal | null {
    let value = this.get("ohmBalance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set ohmBalance(value: BigDecimal | null) {
    if (value === null) {
      this.unset("ohmBalance");
    } else {
      this.set("ohmBalance", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get sohmBalance(): BigDecimal | null {
    let value = this.get("sohmBalance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set sohmBalance(value: BigDecimal | null) {
    if (value === null) {
      this.unset("sohmBalance");
    } else {
      this.set("sohmBalance", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deposit", id.toString(), this);
  }

  static load(id: string): Deposit | null {
    return store.get("Deposit", id) as Deposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get ohmie(): string {
    let value = this.get("ohmie");
    return value.toString();
  }

  set ohmie(value: string) {
    this.set("ohmie", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get maxPremium(): BigDecimal {
    let value = this.get("maxPremium");
    return value.toBigDecimal();
  }

  set maxPremium(value: BigDecimal) {
    this.set("maxPremium", Value.fromBigDecimal(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get treasury(): string {
    let value = this.get("treasury");
    return value.toString();
  }

  set treasury(value: string) {
    this.set("treasury", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Redemption extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Redemption entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Redemption entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Redemption", id.toString(), this);
  }

  static load(id: string): Redemption | null {
    return store.get("Redemption", id) as Redemption | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }

  get ohmie(): string | null {
    let value = this.get("ohmie");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ohmie(value: string | null) {
    if (value === null) {
      this.unset("ohmie");
    } else {
      this.set("ohmie", Value.fromString(value as string));
    }
  }

  get token(): string | null {
    let value = this.get("token");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token(value: string | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromString(value as string));
    }
  }

  get treasury(): string | null {
    let value = this.get("treasury");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set treasury(value: string | null) {
    if (value === null) {
      this.unset("treasury");
    } else {
      this.set("treasury", Value.fromString(value as string));
    }
  }

  get amount(): BigDecimal | null {
    let value = this.get("amount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set amount(value: BigDecimal | null) {
    if (value === null) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (value === null) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(value as Bytes));
    }
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }
}

export class OhmTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OhmTransaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OhmTransaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OhmTransaction", id.toString(), this);
  }

  static load(id: string): OhmTransaction | null {
    return store.get("OhmTransaction", id) as OhmTransaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get ohmieTo(): string {
    let value = this.get("ohmieTo");
    return value.toString();
  }

  set ohmieTo(value: string) {
    this.set("ohmieTo", Value.fromString(value));
  }

  get ohmieFrom(): string {
    let value = this.get("ohmieFrom");
    return value.toString();
  }

  set ohmieFrom(value: string) {
    this.set("ohmieFrom", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }
}

export class SohmTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SohmTransaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SohmTransaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SohmTransaction", id.toString(), this);
  }

  static load(id: string): SohmTransaction | null {
    return store.get("SohmTransaction", id) as SohmTransaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get ohmieTo(): string {
    let value = this.get("ohmieTo");
    return value.toString();
  }

  set ohmieTo(value: string) {
    this.set("ohmieTo", Value.fromString(value));
  }

  get ohmieFrom(): string {
    let value = this.get("ohmieFrom");
    return value.toString();
  }

  set ohmieFrom(value: string) {
    this.set("ohmieFrom", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}
