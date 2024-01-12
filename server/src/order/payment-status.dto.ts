class AmountDTO {
    value: string
    currency: string
}

class PaymentDetails {
    id: string
    status: string
    amount: AmountDTO
    created_at: string
    expires_at: string
}
export class PaymentStatusDto {
    paymentStatus:
    | 'succeeded'
    | 'waiting_for_capture'
    | 'canceled'
    | 'succeeded'
    type: string
    details: PaymentDetails
}