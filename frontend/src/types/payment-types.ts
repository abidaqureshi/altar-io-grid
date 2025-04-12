export type TPaymentData = {
    id: number;
    name: string; // Name of the payment
    code: string; // Code associated with the payment
    amount: number;
    gridSnapshot: string[][]; // Snapshot of the grid at the time of payment
};
