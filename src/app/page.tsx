import Image from 'next/image'
import Message from '../app/components/message'
import Header from '../app/components/header'
import Footer from '../app/components/footer'

export default function Home() {
  return (
    <div>
      <Header background = "#94B4C6" text="'#FFC977'" />
      <h1> filler text filler text fillter text</h1>
      <Footer />
    </div>
  )
}
