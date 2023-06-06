import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Book } from "./componentes/Book";
import { BookAds } from "./componentes/BookAds";
import { BookDetails } from "./componentes/BookDetails";
import { Reviews } from "./componentes/Reviews";
import { Timeline } from "./componentes/Timeline";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "/", element: <Timeline/> },
            { path: "/book", element:<Book/> }, 
            { path: "/bookads", element: <BookAds/> },
            { path: "/bookdetails", element: <BookDetails/> },
            { path: "/reviews", element: <Reviews/> },
        ]
    }
])