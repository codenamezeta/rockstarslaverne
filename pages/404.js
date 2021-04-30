// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div className='container' style={{ paddingTop: '10vh' }}>
      <h1>404 - Page Not Found</h1>
      <Link href='/'>
        <a className='btn btn-primary'>Return To Home</a>
      </Link>
    </div>
  )
}
