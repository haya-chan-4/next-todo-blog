import { Layout } from '../components/organisations/Layout'
import { Auth } from '../components/Auth'
import { NextPage } from 'next'
import { TaskCards } from '../components/molecules/TaskCards'


const Home: NextPage = () => {
  return (
    <Layout title="login">
      <TaskCards />
    </Layout>
  )
}

export default Home
