export class Logger {
    public log(message:string){
        const formattedMessage = this.formatMessage(message);
        this.writeToConsole(formattedMessage);
    }

    // Internal details hidden
  private formatMessage(message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] ${message}`;
  }

  private writeToConsole(message: string): void {
    console.log(`\x1b[31m${message}\x1b[0m`);
  }
}