
import "./App.css"

import { Provider } from 'react-redux';
import { store } from "./app/store.js";

import Todo from "./components/todo";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  )
}

export default App