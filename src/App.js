import Routers from './router';
import { store } from './store'
import { Provider } from 'react-redux'
import "./App.css"
function App() {
  return (
    <Provider store={store}>
      <Routers/>
    </Provider >
  );
}

export default App;
