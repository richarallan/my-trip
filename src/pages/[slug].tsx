import client from 'graphql/client'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

//getStaticPaths => serve para gerar as url em build time {responsável por criar as urls: /about /trip /roo
//getStaticProps => server para buscar os dados da página (alimentar os props das páginas) - build time - porque é um estático
//getServerSideProps => serve para buscar os dados da pagina (props) - runtime - toda requisição (bundle fica só no server)
//getInitialProps <- menus usado (igual o acima) com 1 diferença: (bundle vem para o client) - hydrate (NextJS já não recomenda)

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  //retorna um load enquanto está sendo criado
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
