import Image from 'next/image'
import Message from '../app/components/message'
import Header from '../app/components/header'
import Footer from '../app/components/footer'
import Home from '../app/pages/home'

export default function app() {
  return (
    <div>
      <Home />
      <Footer />
    </div>
  )
}
