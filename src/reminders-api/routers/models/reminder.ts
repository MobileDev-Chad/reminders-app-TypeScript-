export default class Reminder {
  id: number;
  isComplete: boolean;
  constructor(public title: string) {
    // Set the id
    this.id = Date.now();
    // isComplete
    this.isComplete = false;
  }
}
