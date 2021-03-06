import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [listOfArticles , setListOfArticles ] = useState(articles)

    /* Everyting is on desc order, from higher to lower */
    const date = () => {
        var articlesNew = [];
        articlesNew = [...listOfArticles];
        articlesNew.sort((first,second) => {
            const date_1 = new Date(first.date); // ex: 2019 ,
            const date_2 = new Date(second.date); // ex: 2020
           /* if (date_1 > date_2) {
                return -1
            }
            if (date_1 < date_2){
                return 1
            }
            return 0;*/
            return date_2 - date_1; // SHORTCUT!! ex: 2020-2019 = 1 (positive number) ; 2019 < 2020
        })
        setListOfArticles(articlesNew)
    }
    const upvotes = () => {
        var articlesNew = [];
        articlesNew = [...listOfArticles]
        // Sort by upvotes
        articlesNew.sort((first,second) => {
            /* For ascending order
                > 0 : sort b before a ; a is greater than b
                < 0 : sort a before b ; a is less than b 
              === 0 : keep original order of a and b , a must be equal to b
              but because this is desc order, everything is reversed!!!!!
            */

      
            if(first.upvotes > second.upvotes) {
                console.log(first, second)
                console.log("first")
                return -1;
            }
            if (first.upvotes < second.upvotes){
                console.log(first, second)
                console.log("second")
                return 1; 
            }
            return 0; 
        })
        setListOfArticles(articlesNew)

    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={upvotes}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={date}> Most Recent</button>
            </div>
            <Articles articles={listOfArticles}/>
        </div>
    );

}

export default App;
