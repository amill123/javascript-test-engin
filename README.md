# javascript-test-engin

Created AngluarJS project for engin test (interview).

//CSS-wise I've somewhat replicated the original design from the parent website (https://news.ycombinator.com/) that the API was taken from, with a few tweeks as I used a different HTML set-up.

In terms of what the page is supposed to do, it is to show the top 25 articles from an API list of top 500 or so articles. I wasn't too sure of the layout of their API in terms of was the first 25 in the list THE top 25. I did notice a score value which I assumed to be the rank in terms of score (though when you go to the actual website the points don't appear to mean what I think they mean), so I ranked in terms of score.

//In terms of learnings from this test. I had to learn AngularJS from scratch, so that was an interesting task. In terms of layout, it actually seems quite robust, and logically set out in terms of MVC. In terms of support I did note somewhere that angularjs 1.x was going to become unsupported from mid mext year sometime. Some difficulties I ran into included trying to filter by score and sort the array of objects - initially I thought it was due to the size of the array being accessed. But it turns out in the set-up that I have I could not implement the slice(0,25) method, or a sort method (by score). This problem took up the majority of the time (more time than probably necessary!) - it took me a while to realise that angularjs had inbuilt features for piping which allows you to  sort by an object - property and also limit the number of objects displayed in ng-repeat.

//If I have misinterpreted the intent of getting the top 25 articles, where it is just the first 25 objects in the array it would make things a lot smoother in terms of loading. You would only need to access the first 25 article ids from the https://hacker-news.firebaseio.com/v0/topstories.json API. This would greatly speed up the loading of the page as you wouldn't need to access all the articles to check what score value they have.


17/08/2020
//Updated the get query for retrieving the list of article id's to include limitToFirst which is specific to firebace system - which required the inclusion of orderBy.
Previous attempts to include headers and ?limit=25 did not work - had to access firebase api description for assistance