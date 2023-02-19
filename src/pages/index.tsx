import { useEffect } from 'react'
import PrivateRouter from '@/includes/PrivateRouter'
import RootLayout from '@/includes/RootLayout'
import { initI18N } from '@/i18n/i18n'

export default function Home () {
  useEffect(() => { initI18N('es') }, [])

  return (
    <PrivateRouter>
      <RootLayout>
        <section>
          <button className='btn btn-primary'>Home</button>
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
