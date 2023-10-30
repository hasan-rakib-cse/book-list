import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList/BookList';

// books, modalText, isModalOpen - state
// add book - modalText
// remove book - modalText

function App() {
  return (
    <div>
      <BookList />
    </div>
  );
}

export default App;
