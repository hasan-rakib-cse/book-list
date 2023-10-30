import React, { useState } from 'react'

import './BookList.css'

const booksData = [
    {id: 1, name: "Pathar Panchal"},
    {id: 2, name: "Padma Nodir Majhi"},
    {id: 3, name: "Jomidar Darpan"}
];

const Modal = ({modalText}) => {
    return <p>{modalText}</p>
};

const BookList = () => {
    const [books, setBooks] = useState(booksData);
    const [bookName, setBookName] = useState('');
    const [modalText, setModalText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks((prevState) => {
            const newBook = {id: new Date().getTime().toString(), name: bookName}
            return [...prevState, newBook]
        })
        setIsModalOpen(true);
        setModalText('book is added')
        setBookName('');

    }

    const removeBook = (id) => {
        const filterBooks = [...books].filter((book) => book.id != id)
        setBooks(filterBooks);
        setIsModalOpen(true);
        setModalText('book is deleted')
    } 

  return (
    <div>
        <h3>Book List</h3>

        <form onSubmit={handleSubmit}>
            <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
            <button type='submit'>add new book</button>
        </form>

        {isModalOpen && <Modal modalText={modalText} />}

        {books.map((book) => {
            const {id, name} = book;
            return (
                <div className='list' key={id}>
                    <li>{name}</li> <button onClick={() => {removeBook(id)}}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}

export default BookList