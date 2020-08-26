import { bookService } from '../services/book-service.js';
import { BookFilter } from '../cmps/book-app/BookFilter.jsx'
import { BookList } from '../cmps/book-app/BookList.jsx';
import { BookAdd } from '../cmps/book-app/BookAdd.jsx'



export class BookApp extends React.Component {
    state = {
        filterBy: { name: '', price: Infinity },
        books: null,
        nameOrPrice: ''
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query(this.state.filterBy)
            .then(books => {
                this.setState({ books })
            })
    }
    onSetFilter = (value, nameOrPrice) => {
        if (nameOrPrice === 'price') value = +value
        this.setState({ filterBy: { ...this.state.filterBy, [nameOrPrice]: value } }, this.loadBooks)
        this.props.history.push(`/book?filterBy=${value}`)

    }


    render() {
        const { books } = this.state
        return (
            <section>
                <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} price={this.state.filterBy.price} />
                <BookAdd onAddBook={this.loadBooks}/>
                {books && <BookList books={books} />}

            </section>
        )
    }
}
