abstract class LoggerAbstract {
  abstract show(message: any): void;

  printDate(): Date {
    return new Date();
  }
}


export class LoggerRealization extends LoggerAbstract{
    show(message: any): void {
        console.log("Some Text: " + message);
    }

    longWithDate(message: any){
        console.log(this.printDate());
        
        this.show(message);
    }

}