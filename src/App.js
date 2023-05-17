import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Store from './redux/Store';
import MyRouter from './routers/MyRouter';


function App() {
  return (
    <div className="App">
      <Provider store={Store}> 
      <BrowserRouter>
        <Header />
        <MyRouter />
      </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
