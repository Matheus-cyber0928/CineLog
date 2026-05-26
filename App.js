import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import Titulo from './components/Titulo';

import CartaoFilme from './components/CartaoFilme';


const catalogo = [
  {
    id: 1,
    categoria: 'filme',
    poster: '🚀',
    titulo: 'Interestelar',
    genero: 'Ficção Científica',
    ano: 2014,
    sinopse:
      'Um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade.',
  },
  {
    id: 2,
    categoria: 'filme',
    poster: '🏠',
    titulo: 'Parasita',
    genero: 'Thriller',
    ano: 2019,
    sinopse:
      'Uma família pobre se infiltra na vida de uma família rica, com consequências imprevisíveis.',
  },
  {
    id: 3,
    categoria: 'filme',
    poster: '🏜️',
    titulo: 'Duna',
    genero: 'Ficção Científica',
    ano: 2021,
    sinopse:
      'Um jovem nobre assume o controle do planeta mais perigoso do universo.',
  },
  {
    id: 4,
    categoria: 'filme',
    poster: '🪄',
    titulo: 'Harry Potter',
    genero: 'Fantasia / Aventura',
    ano: 2001,
    sinopse:
      'Um jovem bruxo descobre seus poderes e começa sua jornada na Escola de Magia de Hogwarts.',
  },
  {
    id: 5,
    categoria: 'filme',
    poster: '💍',
    titulo: 'Senhor dos Anéis',
    genero: 'Fantasia / Aventura',
    ano: 2001,
    sinopse:
      'Um hobbit parte em uma missão épica para destruir um anel poderoso e salvar a Terra-média.',
  },
  {
    id: 6,
    categoria: 'serie',
    poster: '🧪',
    titulo: 'Breaking Bad',
    genero: 'Drama / Crime',
    ano: 2008,
    sinopse:
      'Um professor de química começa a produzir metanfetamina para garantir o futuro da família.',
  },
  {
    id: 7,
    categoria: 'serie',
    poster: '🔦',
    titulo: 'Stranger Things',
    genero: 'Ficção Científica',
    ano: 2016,
    sinopse:
      'Um grupo de crianças enfrenta forças sobrenaturais em uma pequena cidade.',
  },
  {
    id: 8,
    categoria: 'anime',
    poster: '⚔️',
    titulo: 'Attack on Titan',
    genero: 'Ação / Drama',
    ano: 2013,
    sinopse:
      'A humanidade vive atrás de enormes muralhas para se proteger de gigantes.',
  },
  {
    id: 9,
    categoria: 'anime',
    poster: '📓',
    titulo: 'Death Note',
    genero: 'Thriller Psicológico',
    ano: 2006,
    sinopse:
      'Um estudante encontra um caderno capaz de matar qualquer pessoa cujo nome seja escrito nele.',
  },
  {
    id: 10,
    categoria: 'anime',
    poster: '🍥',
    titulo: 'Naruto',
    genero: 'Ação / Aventura',
    ano: 2002,
    sinopse:
      'Um jovem ninja busca reconhecimento e sonha em se tornar o Hokage de sua vila.',
  },
  {
    id: 11,
    categoria: 'anime',
    poster: '🐉',
    titulo: 'Dragon Ball',
    genero: 'Ação / Artes Marciais',
    ano: 1986,
    sinopse:
      'Goku reúne as Esferas do Dragão e enfrenta inimigos poderosos para proteger a Terra.',
  },
];

export default function App() {
  // estado que guarda o filme selecionado
  // Começa com Null por que nenhum filme foi selecionado
  const [filmesSelecionado, setFilmeSelecionado] = useState(null);
  // guarda a categoria selecionada no filtro
  const [categoriaSelecionada, setcategoriaSelecionada] = useState('todos');

  // Filter() cria uma nova lista filtrada pelo item informado
  const filmes = catalogo.filter((item) => item.categoria === 'filme');
  const series = catalogo.filter((item) => item.categoria === 'serie');
  const animes = catalogo.filter((item) => item.categoria === 'anime');

  // Função responsavel por rendenrizar cada card
  // Ele recebe um item da lista e retorna um componente Cartaofilme
  const renderFilmeItem = (filme) => {
    <CartaoFilme
      // key ajuda a identificar cada item dal ista
      key={filme.id}
      // O spread (...) envia os dados informados do filme como props
      {...filme}

      //quando clicar no botão ele salva o filme no estado 
      onPress={() => setFilmeSelecionado(filme)}
    />
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.logo}>CINELOG</Text>
        <View style={styles.Filtro}>
          {[
            { key: 'todos', label: 'todos' },
            { key: 'filme', label: 'todos' },
            { key: 'serie', label: 'todos' },
            { key: 'anime', label: 'todos' },
          ].map((filtro) => (
            <TouchableOpacity
              key={filtro.key}
              style={[styles.filtroBotao, categoriaSelecionada === filtro.key && styles.filtroBotaoAtivo,]}
              onPress={() => setcategoriaSelecionada(filtro.key)}
            >
              <Text style={[styles.filtroTexto, categoriaSelecionada === filtro.key && styles.filtroTextoAtivo]}>

                {filtro.label}
              </Text>

            </TouchableOpacity>
          ))

          }

        </View>

        {categoriaSelecionada === 'todos' ? (
          <>
            <Titulo texto={"🎬Filmes"} />
            {filmes.map(renderFilmeItem)}

            <Titulo texto={"📺Series"} />
            {filmes.map(renderFilmeItem)}

            <Titulo texto={"🎥Animes"} />
            {filmes.map(renderFilmeItem)}

          </>

        ) : (
          <>
            <Titulo
              texto={
                categoriaSelecionada === 'filme' ? '🎬Filmes'
                  : categoriaSelecionada === 'serie' ? '📺Series' : '🎥Animes'
              }
            />

            {catalogo.filter((item) => item.categoria === categoriaSelecionada).map(renderFilmeItem)}
          </>
        )

        }


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    paddingHorizontal: 20,
    paddingTop: 56,
  },
  logo: {
    fontSize: 29,
    fontWeight: '900',
    letterSpacing: 3,
    color: '#e50914',
    marginBottom: 24,
  },

  FiltroContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  filtroBotao: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginRight: 10,
    marginBottom: 10,
  },
  filtroBotaoAtivo: {
    backgroundColor: '#e50914'
  },

  filtroTexto: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  filtroTextoAtivo: {
    color: '#ffff'
  }

});
