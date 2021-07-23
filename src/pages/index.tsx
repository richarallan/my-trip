import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  //adicionei uma tag
  return {
    //para ISR -> deixarei desabilitado pois não é necessário
    // revalidate: 604800,
    props: {
      places
    }
  }
}
