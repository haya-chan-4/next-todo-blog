import { Layout } from '../components/organisations/Layout'
import { Auth } from '../components/Auth'
import { NextPage } from 'next'

const Blog: NextPage = () => {
  return (
    <Layout title="login">
      {/* <Auth /> */}
      <p className='text-4xl'>Blog</p>
    </Layout>
  )
}

export default Blog
