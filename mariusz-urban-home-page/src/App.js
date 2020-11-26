import './App.scss';
import DisplayContainer from './components/DisplayContainer/DisplayContainer';
import BackgroundContainer from './components/BackgroundContainer/BackgroundContainer';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import TextContainer from './components/TextContainer/TextContainer';
import Header from './components/Header/Header';
import LangSwitch from './components/LangSwitch/LangSwitch';
import Navigation from './components/Navigation/Navigation';
import Description from './components/Description/Description';
import Technologies from './components/Technologies/Technologies';

function App() {
  return (
    <div className="App">
     <scetion className='section start'>
      <DisplayContainer 
        background={
          <BackgroundContainer 
            image1={
              <BackgroundImage element='process' />
            }
            image2={
              <BackgroundImage element='me' />
            }
            image3={
              <BackgroundImage element='bookshelf' />
            }
          />
        }
        text = {
          <TextContainer 
          header={
            <Header title='Mariusz Urban' lang={<LangSwitch />}  style ="start" />
          } 
          nav={
            <Navigation />
          }
          style="start"
          />
        }
      />
     </scetion>
     <scetion className='section front-end'>
     <DisplayContainer 
      background={
          <BackgroundContainer 
            image1={
              <BackgroundImage element='code' />
            }
            image2={
              <BackgroundImage element='dev' />
            }
            
          />
        }
      text  = {
          <TextContainer 
          header={
            <Header title='Front-End Development'  style ="front-end" />
          } 
          desc={
            <Description desc='front' />
          }
          tech={
            <Technologies tech='front' />
          }
          style="front"
          
          />
        }
     />
     </scetion>
     <scetion className='section ux'>
     <DisplayContainer
     background={
          <BackgroundContainer 
            image1={
              <BackgroundImage element='sky' />
            }
            image2={
              <BackgroundImage element='tree' />
            }
            image3={
              <BackgroundImage element='girl' />
            }
          />
        }
      text  = {
          <TextContainer 
          header={
            <Header title='UI/UX Design'  style ="ux" />
          } 
          desc={
            <Description desc='ux' />
          }
          tech={
            <Technologies tech='ux' />
          }
          style="ux"
          
          />
        }

     />
     </scetion>
     <scetion className='section graphic'>
     <DisplayContainer 
      background={
          <BackgroundContainer 
            image1={
              <BackgroundImage element='threed' />
            }
            image2={
              <BackgroundImage element='illustration' />
            }
            image3={
              <BackgroundImage element='cosmos' />
            }
          />
        }
      text  = {
          <TextContainer 
          header={
            <Header title='Grafika & 3D'  style ="graphic" />
          } 
          desc={
            <Description desc='graphic' />
          }
          tech={
            <Technologies tech='graphic' />
          }
          style="graphic"
          
          />
        }
     />
     </scetion>
     <scetion className='section about'>
     <DisplayContainer 
     background={
          <BackgroundContainer 
            image1={
              <BackgroundImage element='cloud' />
            }
            image2={
              <BackgroundImage element='melek' />
            }
            image3={
              <BackgroundImage element='ball' />
            }
            image4={
              <BackgroundImage element='me-art' />
            }
          />
        }
      text  = {
          <TextContainer 
          header={
            <Header title='O mnie '  style ="about" />
          } 
          desc={
            <Description desc='about' />
          }
     
          style="about"
          
          />
        }/>
     </scetion>
     <scetion className='section'>
     <DisplayContainer />
     </scetion>
    </div>
  );
}

export default App;
