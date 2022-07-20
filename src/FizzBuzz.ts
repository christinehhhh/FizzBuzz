export class FizzBuzz {
  resultOfNumber(number: number): string {
    let message = "";
    if (this.isMultipleOfBoth(number)) {
      message = "FizzBuzz";
    } else if (this.isMultipleOfThree(number)) {
      message = "Fizz";
    } else if (this.isMultipleOfFive(number)) {
      message = "Buzz";
    }
    return message;
  }

  private isMultipleOfThree(number: number): boolean {
    return number % 3 === 0;
  }

  private isMultipleOfFive(number: number): boolean {
    return number % 5 === 0;
  }

  private isMultipleOfBoth(number: number): boolean {
    return this.isMultipleOfThree(number) && this.isMultipleOfFive(number);
  }
}
