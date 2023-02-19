import PrivateRouter from '@/includes/PrivateRouter'
import RootLayout from '@/includes/RootLayout'

export default function Cart () {
  return (
    <PrivateRouter>
      <RootLayout title='Cart'>
        <section>Cart</section>
      </RootLayout>
    </PrivateRouter>
  )
}
