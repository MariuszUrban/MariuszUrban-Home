import './App.scss';
import DisplayContainer from './components/DisplayContainer/DisplayContainer';
import BackgroundContainer from './components/BackgroundContainer/BackgroundContainer';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import TextContainer from './components/TextContainer/TextContainer';
import Header from './components/Header/Header';
import LangSwitch from './components/LangSwitch/LangSwitch';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
     <scetion className='section'>
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
            <Header title='Mariusz Urban' lang={<LangSwitch />}  />
          } 
          nav={
            <Navigation />
          }

          />
        }
      />
     </scetion>
     <scetion className='section'>
     <DisplayContainer />
     </scetion>
     <scetion className='section'>
     <DisplayContainer />
     </scetion>
     <scetion className='section'>
     <DisplayContainer />
     </scetion>
     <scetion className='section'>
     <DisplayContainer />
     </scetion>
     <scetion className='section'>
     <DisplayContainer />
     </scetion>
    </div>
  );
}

export default App;
