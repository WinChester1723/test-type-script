abstract class Logger {
    abstract log(mes: string): void;

    printDate(date: Date){
        this.log(date.toString());
    }
}

export class MyLogger extends Logger{
    log(mes: string): void {
        console.log(mes);
    }

    logWithDate(mes: string){
        this.printDate(new Date());

        this.log(mes);
    }

}