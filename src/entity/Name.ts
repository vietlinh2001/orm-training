import { Column } from "typeorm";

export default class Name {

  @Column()
  first: string

  @Column()
  last: string

  constructor(first, last) {
    this.first = first
    this.last  = last
  }

  getFull() {
    return `${this.first} ${this.last}`
  }
}