import './App.css';
import Index from "./routes/index";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from '../src/redux/store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter >
          <div className='divFondo'>
            <Index />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
