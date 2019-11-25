export interface Users {
    id: number;
    name: string;
    email: string;
    password: string;
    noofbooks: number;
    allBooks: any[];
    oldBookDetails: any[];
    categories: any[];
    comments: [{bookid: number , comments: string , rating: number }];
    bookid: [{bid: number , startdate: string , enddate: string}];
}
