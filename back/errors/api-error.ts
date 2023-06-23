export class NotFoundErrror extends Error {
    constructor(public message: string, public statusCode: number) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  