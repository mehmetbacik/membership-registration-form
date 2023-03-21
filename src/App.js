import './App.css';
import MemberRegistration from './components/MemberRegistration';
import PageContent from './components/PageContent';

function App() {
  return (
    <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <PageContent />
            </div>
            <div className='col-12'>
              <MemberRegistration />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
