import React from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './api'

const Donate = () => (
  <StripeProvider apiKey="pk_test_O8RBAKRMYm0tvjqso8X3Da6r00kptAD58s">
    <div>
      <h1>React Stripe Elements Example</h1>
      <Elements>
        <CheckoutForm />
      </Elements>
    </div>
  </StripeProvider>
)

export default Donate
