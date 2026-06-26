class Book {
    constructor(isbn, title, author, year, genre, pages, popularity, firstLine) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.pages = pages;
        this.popularity = popularity;
        this.firstLine = firstLine;
    }

    getTitle() {
        return this.title;
    }

    getInfo() {
        return `"${this.title}" — ${this.author} (${this.year})`;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
        } 
    }

    addBooks(booksArray) {
        booksArray.forEach(book => this.addBook(book));
    }

    getAllBooks() {
        return this.books;
    }

    printAllTitles() {
        console.log(`\n=== ${this.name} ===`);
        console.log("СПИСОК ВСЕХ КНИГ:\n");
        this.books.forEach((book, index) => {
            console.log(`${String(index + 1).padStart(2, ' ')}. ${book.getTitle()}`);
        });
    }

    printMostPopularBooks() {
        const bestBooks = {};
        
        for (let book of this.books) {
            if (!bestBooks[book.author] || book.popularity > bestBooks[book.author].popularity) {
                bestBooks[book.author] = book;
            }
        }
        
        const popularBooks = Object.values(bestBooks);
        popularBooks.sort((a, b) => b.popularity - a.popularity);

        console.log("\n=== САМЫЕ ПОПУЛЯРНЫЕ КНИГИ КАЖДОГО АВТОРА ===\n");
        popularBooks.forEach((book, index) => {
            console.log(`${index + 1}. "${book.title}" — ${book.author} (${book.popularity})`);
        });
    }

    sortByYear() {
        return [...this.books].sort((a, b) => b.year - a.year);
    }

    printSortedByYear() {
        const sorted = this.sortByYear();
        console.log("\n=== КНИГИ, ОТСОРТИРОВАННЫЕ ПО ГОДУ ===\n");
        sorted.forEach((book, index) => {
            console.log(`${String(index + 1).padStart(2, ' ')}. "${book.title}" — ${book.author} (${book.year})`);
        });
    }
}

const book1 = new Book("978-5-17-081072-7", "Мизери", "Стивен Кинг", 1987, "Психологический триллер", 320, 4.3, "Когда ты заглядываешь в бездну, сама бездна заглядывает в тебя. Фридрих Ницше");
const book2 = new Book("978-5-17-065495-6", "Оно", "Стивен Кинг",  1986, "Ужасы", 1138, 4.8, "Начало этому ужасу, который не закончится еще двадцать восемь лет — если закончится вообще, — положил, насколько я знаю и могу судить, сложенный из газетного листа кораблик, плывущий по вздувшейся от дождей ливневой канаве.");
const book3 = new Book("978-5-17-084078-6", "Сияние", "Стивен Кинг", 1977, "Ужасы", 447, 5, "Сон разума рождает чудовищ. Коли сияет, так сиять и будет.");
const book4 = new Book("978-0-451-16951-4", "Кладбище домашних животных", "Стивен Кинг", 1983, "Ужасы", 373, 4, "«Иисус сказал им: «Лазарь, друг наш, уснул; но я иду разбудить его».");
const book5 = new Book("978-5-403-03153-0", "Ловец снов", "Стивен Кинг", 2001, "Мистика", 680, 3, "Из газеты «Ист Орегониен» — от 25 июня 1947 года: СЛУЖАЩИЙ УПРАВЛЕНИЯ О БОРЬБЕ С ЛЕСНЫМИ ПОЖАРАМИ ЗАСЕК «ЛЕТАЮЩИЕ БЛЮДЦА»");
const book6 = new Book("978-5-389-22962-4", "Приключения Тома Сойера", "Марк Твен", 1876, "Приключения", 236, 5, "– Том! – Ответа нет.");
const book7 = new Book("978-5-389-26597-4", "Приключения Гекльберри Финна", "Марк Твен", 1884, "Сатира", 473, 4.3, "Вы про меня ничего не знаете, если не читали книжки под названием “Приключения Тома Сойера”, но это не беда.");
const book8 = new Book("978-5-00180-321-8", "Как обманывать людей. Пособие для политиков, журналистов и карточных шулеров", "Марк Твен", 2021, "Сатира", 240, 4.8, "В тринадцать лет я был удивительно смышленый ребенок, просто на редкость смышленый, как я тогда полагал.");
const book9 = new Book("978-5-9287-3348-3", "Принц и нищий", "Марк Твен", 1881, "Исторический роман", 236, 5, "В древнем городе Лондоне, в один осенний день второй половины шестнадцатого столетия, в бедной семье по фамилии Канти родился ребенок – мальчик, которому никто не был рад.");
const book10 = new Book("978-5-4467-1781-1", "Таинственный незнакомец", "Марк Твен", 1916, "Фантастика", 120, 4, "Шла зима 1590 года. Австрия была оторвана от всего мира и погружена в сон.");
const book11 = new Book("978-5-389-24527-3", "Евгений Онегин", "Александр Сергеевич Пушкин", 1833, "Роман в стихах", 108, 5, "Мой дядя самых честных правил, Когда не в шутку занемог, Он уважать себя заставил И лучше выдумать не мог.");
const book12 = new Book("978-5-389-25405-3", "Капитанская дочка", "Александр Сергеевич Пушкин", 1836, "Исторический роман", 135, 4.9, "Отец мой, Андрей Петрович Гринев, в молодости своей служил при графе Минихе[3] и вышел в отставку премьер-майором в 17… году.");
const book13 = new Book("978-5-17-036272-2", "Дубровский", "Александр Сергеевич Пушкин", 1841, "Роман", 116, 4.6, "Несколько лет тому назад в одном из своих поместий жил старинный русский барин, Кирила Петрович Троекуров.");
const book14 = new Book("978-5-389-32524-1", "Пиковая дама", "Александр Сергеевич Пушкин", 1834, "Повесть", 31, 4.5, "Однажды играли в карты у конногвардейца Нарумова.");
const book15 = new Book("978-5-389-13586-4", "Руслан и Людмила", "Александр Сергеевич Пушкин", 1820, "Поэма", 352, 4.8, "Дела давно минувших дней, Преданья старины глубокой.");

const library = new Library("Библиотека");

const newBooks = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15];
library.addBooks(newBooks);

library.printAllTitles();

library.printMostPopularBooks();

library.printSortedByYear();