import React, { useState } from 'react'
import { injectStripe } from 'react-stripe-elements'
import { DonateButton, StyledCardElement } from './styles'

const CheckoutForm = ({ stripe }) => {
  const [complete, setComplete] = useState(false)

  const submit = async ev => {
    const { token } = await stripe.createToken({ name: 'Name' })
    // console.log(token)
    const response = await fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id,
    })

    if (response.ok) setComplete(true)
  }

  if (complete) return <h1>Purchase Complete</h1>

  return (
    <div
      style={{
        width: '30%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
      }}
      className="checkout"
    >
      <StyledCardElement />
      <DonateButton type="button" onClick={submit}>Purchase</DonateButton>
    </div>
  )
}

export default injectStripe(CheckoutForm)
