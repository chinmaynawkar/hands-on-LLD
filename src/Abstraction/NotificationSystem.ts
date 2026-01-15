// Problem Statement : Building the Notification System

/*
1. What is the abstraction?
   → Notification sending capability

2. What should the caller know?
   → That a notification can be sent with a message

3. What should the caller NOT know?
   → Whether it's email, SMS, push
   → How delivery happens
   → What protocol or provider is used

   The abstraction is not Email or SMS.
   The abstraction is "sending a notification".
*/


export interface Notifier {
    send(message: string): void;
}