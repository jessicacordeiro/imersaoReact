import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfilesRelations'

function ProfileSidebar() {
  const githubUser = 'jessicacordeiro';
  return (
    <Box as="aside">
      <img src= {`https://github.com/${githubUser}.png`} style={{ borderRadius: '10px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>
          @{githubUser}
        </a>
      </p> 
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const [minhasComunidades, setMinhasComunidades] = React.useState([{
    id: '12536',
    titulo: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  // const minhasComunidades = ['Alurakut'];
  const meusAmigos = ['rafaballerini', 'peas', 'omariosouto', 'SpruceGabriela', 'codethi', 'SilvioMachado', 'jessicacordeiro']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a), Jéssica</h1>

            <OrkutNostalgicIconSet confianca="3" legal="2" sexy="3" />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
              const dadosForm = new FormData(e.target);

              console.log('Campo: ', dadosForm.get('titulo'));
              console.log('Campo: ', dadosForm.get('image'));

              const minhaComunidade = {
                id: new Date().toISOString(),
                titulo: dadosForm.get('titulo'),
                image: dadosForm.get('image')
              }
              const comunidadesAtualizadas = [...minhasComunidades, minhaComunidade];
              setMinhasComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?" name="titulo" aria-label="Qual vai ser o nome da sua comunidade?" type="text" />
              </div>
              <div>
                <input placeholder="Coloque uma URL para usarmos de capa" name="image" aria-label="Coloque uma URL para usarmos de capa" />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Meus Amigos ({meusAmigos.length})</h2>

            <ul>
            {meusAmigos.map((itemAtual) => {
              return (
                <li key={itemAtual}>
                  <a href={`/users/${itemAtual}`}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Minhas Comunidades ({minhasComunidades.length})</h2>

            <ul>
            {minhasComunidades.map((itemAtual) => {
              return (
                <li key={itemAtual.id}>
                  <a href={`/users/${itemAtual.titulo}`} key={itemAtual.titulo}>
                    <img src={itemAtual.image} />
                    <span>{itemAtual.titulo}</span>
                  </a>
                </li>
              )
            })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>  
  )
}
