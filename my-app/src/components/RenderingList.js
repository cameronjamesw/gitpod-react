import React from "react"
import Book from "./Book"

function RenderingList(){
    const bookList = [
        "to kill a mockingbird",
        "the great gatsby",
        "the catcher in the rye"
    ]

    const books = [
        {
            title: "to kill a mockingbird",
            author: "harper lee",
            pages: 281
        },
        {
            title: "the great gatsby",
            author: "f. scott fitzgerald",
            pages: 218
        },
        {
            title: "the catcher in the rye",
            author: "j. d. salinger",
            pages: 234
        }
    ]
    return (
        <div>
        {
            bookList.map(book => {
                return <h3 key={book}>{book}</h3>
            })
        }
        <hr/>
        {
            books.map(book => {
                return < Book book={book} key={book.title} />
            })
        }
        </div>
    )
}

export default RenderingList