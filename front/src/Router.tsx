import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Book } from "./componentes/Book";
import { BookAds } from "./componentes/BookAds";
import { BookDetails } from "./componentes/BookDetails";
import { Reviews } from "./componentes/Reviews";
import { Timeline } from "./componentes/Timeline";
import Announcement from "./componentes/Announcement";
import { Collection } from "./componentes/Collection";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "/", element: <Timeline/> },
            { path: "/acervo", element: <Collection/> },
            { path: "/acervo/search", element: <Collection/> },
            { path: "/book", element:<Book/> }, 
            { path: "/bookads", element: <BookAds/> },
            { path: "/reviews", element: <Reviews/> },
            { path: "/anuncios/:id", element: <Announcement/> },
            { path: "/livro/:id", element: <BookDetails/> }
        ]
    }
])