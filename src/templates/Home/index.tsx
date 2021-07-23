import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'

//importar o link
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'

const Map = dynamic(import('components/Map'), {
  ssr: false
})

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simples project to show in a map the places that i went"
        canonical="https://my-trips.richarallan.com.br"
        openGraph={{
          url: 'https://my-trips.richarallan.com.br',
          title: 'My Trips',
          description:
            'A simples project to show in a map the places that i went',
          images: [
            {
              url: 'https://my-trips.willianjusten.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
