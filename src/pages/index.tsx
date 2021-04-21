//formas de consumo de uma api em next
// SPA se precisamos que as infos sejam carregadas no momento q o user acessa a página,
import { useEffect } from "react"
// aí se fazem melhores os outros métodos:
// SSR Server Side Rendering
// SSG
import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { api } from "../services/api";
import { convertDurationToTimeString } from "../utils/converDurationToTimeString";

type Episode = {
  id: string;
  title: string;
  members: string;
  //...
}

type HomeProps = {
  episodes: Episode[];
}


export default function Home(props: HomeProps) {
  // SPA: esse método n possibilita a iondexação por parte dos crowlers, 
  // por estes n aguardam a chamada completa da api finalizar para então 
  // coletar as infos disponíveis na página pra indexar no google e tals
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }, [])

  return (
    <div>
      <h1>index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

//SSG Static Server Generation
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url
    };
  })

  return{
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, //a cada 8hras será ferada uma nova versão dessa página
  }
}

// // SSR p/ fzer SSR no next: 
// // dentro de qlqr página/arquivo na pasta pages
// //exportar a seguinte função: 
// export async function getServerSideProps() {
  //   //fazendo isso, o next já entende q ele precisa executar essa função,
  //   //antes de exibir o conteudo da página pro usuário final
  //   const response = await fetch('http://localhost:3333/episodes')
  //   const data = await response.json()
  //   return{
    //     props: {
      //       episodes: data,
      //     }
      //   }//ao fazer isso, qdo a página carrega, no momento q a página é exibida,
      //   //os dados já vao estar ali, n será preciso fazr nenhuma requisição pro back end, 
      //   // pq a requisição já é feita na camada do next, q é o servidor rodando a aplicação
      // }
      
      