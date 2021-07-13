import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfilesRelations'

function ProfileSidebar() {
  const githubUser = 'jessicacordeiro';
  return (
    <Box>
      <img src= {`https://github.com/${githubUser}.png`} style={{ borderRadius: '10px' }} />
    </Box>
  )
}

export default function Home() {
  const meusAmigos = ['rafaballerini', 'peas', 'omariosouto', 'SpruceGabriela', 'codethi', 'SilvioMachado']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo</h1>

            <OrkutNostalgicIconSet confianca="3" legal="2" sexy="3" />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Meus Amigos ({meusAmigos.length})
            </h2>

            <ul>
            {meusAmigos.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            <h2 className="smallTitle">Minhas Comunidades</h2>
          </Box>
        </div>
      </MainGrid>
    </>  
  )
}
