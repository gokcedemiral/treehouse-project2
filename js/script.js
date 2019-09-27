/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Erşen Gökçe Demiral
******************************************/

/*** 
   The global variables
***/
const studentListItems = document.querySelectorAll('li.student-item');
const page = document.querySelector('body>div.page');
const perPage = 10;

/*** 
      Function showPage
         displays only the 10(perPage) on the page.
***/
const showPage = (list, page) => {
   const firstIndex = (page * perPage) - perPage;
   const lastIndex = (page * perPage) - 1;
   for( let i = 0; i < list.length; i++){
      if(i>= firstIndex && i<= lastIndex){
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
};
/*** End showPage() ***/

/*** 
      Function appendPageLinks:
         creates pagination buttons. 
         places to the DOM. 
         adds functionality to the buttons.
***/
const appendPageLinks = (list) => {
   const pageAmount = Math.ceil( list.length / perPage);
   const div = document.createElement('div');
   div.className = 'pagination';
   page.appendChild(div);
   const paginationUl = document.createElement('ul');
   div.appendChild(paginationUl);
   
   for( let i = 0; i < pageAmount; i++){
      const pageNumber = i+1;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href= '#';
      a.textContent = pageNumber;
      li.appendChild(a);
      paginationUl.appendChild(li);
   }
   const aTags = document.getElementsByTagName('a');
   aTags[0].className = 'active'; //to set the first one active as it will display the first ten as default
  
   paginationUl.addEventListener('click', (e) => {  
      e.preventDefault();
      //Loop to remove all the active class from aTags
      for (let i = 0; i < aTags.length ; i++) {                      
         aTags[i].className = '';                       
      };  
      e.target.className = "active";                              
      showPage(studentListItems, e.target.textContent);                             
   });
};
/*** End appendPageLinks() ***/

/***
   Calling for the functions
***/
showPage(studentListItems, 1);
appendPageLinks(studentListItems);

/*** Exceeding Expectations Part ***/

// Adding the search bar
const pageHeader = document.querySelector('.page-header.cf'); 
const studentSearch = document.createElement('div');
studentSearch.className = 'student-search';
pageHeader.appendChild(studentSearch);
const searchInput = document.createElement('input');
searchInput.placeholder = 'Search for students...';
studentSearch.appendChild(searchInput);
const searchButton = document.createElement('button');
searchButton.textContent = 'Search';
studentSearch.appendChild(searchButton);

// Creating the no result div in case of no student match
const noMatch = document.createElement('div')

/*** Function searchBox  still not working - i gave up. please let me know what's wrong! */
const searchBox = (search, names) => {
   //empty array for search results
   const results =[];
   // looping through the names for search input
   for( let i = 0; i < names.length; i++){
      names[i].style.display = 'none';
      const input = search.value.toLowerCase();
      const studentName = names[i].textContent.toLowerCase();

      if( input.length !== 0 && studentName.includes(input) ){
         results.push(names[i]);
         noMatch.innerHTML = '';
      }      
      if ( results.length === 0 && input.length !==0 ){
         noMatch.innerHTML = '<p>Sorry! There seems to be no match. Keep trying!</p>';
         page.appendChild(noMatch);
      } else {
         showPage(results, 1);
         appendPageLinks(results);
      }
   }
 };

// // Event Listeners for Search bar
// searchButton.addEventListener('click',(e) =>{
//    e.preventDefault();
//    searchBox(searchInput, studentListItems);
// });

// searchInput.addEventListener('keyup',(e) =>{
//    e.preventDefault();
//    searchBox(searchInput, studentListItems);
// });


