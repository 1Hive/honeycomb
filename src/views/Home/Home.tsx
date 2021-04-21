import React from 'react'
import beeSvg from '../../assets/img/bee.svg'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={beeSvg} height={95} alt="bee" />}
        title="Brand new farms coming soon, stay tuned! 👨‍🌾🐝🍯"
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="Back to Honeyswap" href="https://app.honeyswap.org/#/swap" variant="default" />
      </div>
    </Page>
  )
}

export default Home
