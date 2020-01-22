import React, { useState } from 'react'

import { CardElement, injectStripe } from 'react-stripe-elements'

const CheckoutForm = ({ stripe }) => {
  const [complete, setComplete] = useState(false)

  const submit = async ev => {
    const { token } = await stripe.createToken({ name: 'Name' })
    console.log(token)
    const response = await fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id,
    })

    if (response.ok) setComplete(true)
  }

  if (complete) return <h1>Purchase Complete</h1>

  return (
    <div style={{ width: '25%' }} className="checkout">
      <p>Would you like to complete the purchase?</p>
      <CardElement />
      <button type="button" onClick={submit}>Purchase</button>
    </div>
  )
}

export default injectStripe(CheckoutForm)
