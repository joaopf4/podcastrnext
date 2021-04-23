//formas de consumo de uma api em next
// SPA se precisamos que as infos sejam carregadas no momento q o user acessa a página,
import { useContext, useEffect } from "react"
// aí se fazem melhores os outros métodos:
// SSR Server Side Rendering
// SSG
import { GetStaticProps } from 'next';
import { convertDurationToTimeString } from "../utils/converDurationToTimeString";
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { PlayerContext } from "../contexts/PlayerContext";
import { api } from "../services/api";

import Image from 'next/image';
import Link from 'next/link';
import styles from './home.module.scss';

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
  //...
}

type HomeProps = {
  latestEpisodes: Episode[];
  allEpisodes: Episode[];
}


export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  // SPA: esse método n possibilita a iondexação por parte dos crowlers, 
  // por estes n aguardam a chamada completa da api finalizar para então 
  // coletar as infos disponíveis na página pra indexar no google e tals
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }, [])

  const { play } = useContext(PlayerContext);

  return (
    <div className={styles.homepage}>
      <section className={styles.latestEpisodes}>
        <h2>Últimos lançamentos</h2>
        <ul>
          {latestEpisodes.map(episode => {
            return (
              <li key={episode.id}>
                <Image 
                  width={192} 
                  height={192} 
                  src={episode.thumbnail} 
                  alt={episode.title} 
                  objectFit="cover"
                />
                <div className={styles.episodeDetails}>
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>
                <button type="button" onClick={() => play(episode)}>  //sempre q passo uma func. c/ parametr/. dentro de onClick, usar func. anonima
                  <img src="/play-green.svg" alt="Tocar episódio" />
                </button>
              </li>
            )
          })}
        </ul>
      </section>
      <section className={styles.allEpisodes}>
        <h2>Todos os episódios</h2>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allEpisodes.map(episode => {
              return (
                <tr key={episode.id}>
                  <td style={{width: 72}}>
                    <Image 
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                      objectFit="cover"
                    />
                  </td>
                  <td>
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                  </td>
                  <td>{episode.members}</td>
                  <td style={{width: 100}}>{episode.publishedAt}</td>
                  <td>{episode.durationAsString}</td>
                  <td>
                    <button type="button">
                      <img src="/play-green.svg" alt="Tocar episódio" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
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
      url: episode.file.url
    };
  })
  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return{
    props: {
      latestEpisodes,
      allEpisodes
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
      
      