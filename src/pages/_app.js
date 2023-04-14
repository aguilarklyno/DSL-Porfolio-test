import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-gray-800 h-screen'>
      <Component {...pageProps} />
    </div>
  )
}
