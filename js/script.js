/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Erşen Gökçe Demiral
******************************************/

/*** 
   The global variables
***/
const listItems = document.querySelectorAll('li.student-item');
const page = document.querySelector('body>div.page');
//console.log(listItems);
const perPage = 10;


/*** 
 *    Function showPage
         displays only the 10(perPage) on the page.
         
      Parameters:
         - list : all of the students' list (we will call the listItems we defined above)
         - page : the page that the selected 10 is supposed to be displayed
      
      What else is there:
         - firstIndex : The first list item's index of the page
         - lastIndex : The last list item's index of the page
         - for loop to iterate through the list items
         - if condition to set whether they have the index between first and last index (including both)

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

/*** 
 *    Function appendPageLinks
         creates pagination buttons. 
         places to the DOM. 
         adds functionality to the buttons. 
         
      Parameters:
         - list : all of the students' list (we will call the listItems we defined above)
         - page : the page that the selected 10 is supposed to be displayed
      
      What else is there:
         - firstIndex : The first list item's index of the page
         - lastIndex : The last list item's index of the page
         - for loop to iterate through the list items
         - if condition to set whether they have the index between first and last index (including both)

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
      a.textContent = pageNumber;
      li.appendChild(a);
      paginationUl.appendChild(li);
      a.addEventListener('click', () => {
         showPage(listItems, pageNumber);
         a.className = 'active';
      });
   }
   

};
appendPageLinks(listItems);






// Remember to delete the comments that came with this file, and replace them with your own code comments.