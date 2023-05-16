import { useEffect } from 'react'
import Link from 'next/link'

// resources
import { Routing } from '@/router/routing'
import { initI18N } from '@/i18n/i18n'
// components
import PrivateRouter from '@/includes/PrivateRouter'
import RootLayout from '@/includes/RootLayout'

export default function Home () {
  useEffect(() => { initI18N('es') }, [])

  return (
    <PrivateRouter>
      <RootLayout>
        <section className='card card-glass'>
          <Link className='btn btn-dark btn-glow p-3 px-5' href={Routing.login}>Go to login</Link>
        </section>
      </RootLayout>
    </PrivateRouter>

  )
}

// export async function getServerSideProps () {
//   // Fetch data from external API
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }
