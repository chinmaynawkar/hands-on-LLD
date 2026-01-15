import { Notifier } from './NotificationSystem';

export class EmailNotifier implements Notifier{
    send(message:string): void {
        console.log(`Sending email: ${message}`);
    }
}

export class SMSNotifier implements Notifier {
  send(message: string): void {
    console.log(`📱 Sending SMS notification: ${message}`);
  }
}
