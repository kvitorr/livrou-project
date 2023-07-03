import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Book } from "./componentes/Book";
import { BookAds } from "./componentes/BookAds";
import { BookDetails } from "./componentes/BookDetails";
import { Reviews } from "./componentes/Reviews";
import { Timeline } from "./componentes/Timeline";
import Announcement from "./componentes/Announcement";
import { Collection } from "./componentes/Collection";
import ErrorElement from "./componentes/Error/ErrorElement";
import { FindReviews } from "./componentes/FindReviews";


export const router = createBrowserRouter([
    {
        path: "/",
        element: (
              <App />
          ),
          errorElement: <ErrorElement/>,
        children: [
            { path: "/", element: <Timeline/> },
            { path: "/acervo", element: <Collection/> },
            { path: "/acervo/search", element: <Collection/> },
            { path: "/reviews", element: <FindReviews/> },
            
            { path: "/bookads/:id", element: <BookAds/> },
            { path: "/anuncios/:id", element: <Announcement/> },
            { path: "/livro/:id", element: <BookDetails/> },
            { path: "/reviews/:id", element: <Reviews/> }

        ]
    }
])