import React, { useState } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './api'
import { DonateContainer, DonateText, ClubName } from './styles'

const Donate = () => {
  const [clubName, setClubName] = useState('')

  return (
    <StripeProvider apiKey="pk_test_O8RBAKRMYm0tvjqso8X3Da6r00kptAD58s">
      <DonateContainer>
        <DonateText>Support us and your favorite clubs by donating!</DonateText>
        <DonateText style={{ fontSize: '2vh', width: '70%', marginTop: '3vh' }}>Tell us what club to donate to! (Leave blank if you would like the donate to the team at ClubHQ)</DonateText>
        <ClubName placeholder="Club Name" value={clubName} onChange={e => setClubName(e.target.value)} />
        <Elements>
          <CheckoutForm />
        </Elements>
      </DonateContainer>
    </StripeProvider>
  )
}

export default Donate
