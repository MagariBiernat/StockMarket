import Layout from "../components/Layout"
import { connectToDatabase } from "../utils/mongodb"

export default function Home({ isConnected }) {
  return <Layout>elo index</Layout>
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
