# treehouse-project2
Team Treehouse 2nd Project on Adding Pagination and listing.

# Project Description

A student list containing names, photos and email addresses are given. By using JS you are expected to display 10 names at a time and provide a navigation system, aka a pagination, to reach the next 10 of the list and so on. 

- You are expected to adhere "Progressive enhancement principles". Meaning, once the JS is turned off, the page should continue displaying the list as a whole, and/or the basic content, functionality, message, look and feel should be accessible to all web browsers/ different display resolutions.

- You are expected to use vanilla JS.

- You are expected to link all JS from an external file rather than inline JS and use unobstrusive JS.

- Always explain how the functions work with code comments.

- Paging, pagination links and search bar needs to be written as "DRY" as possible. 

# What I built

# 1  Function showPage
         displays only the 10(perPage) on the page.
         
      Parameters:
         - list : all of the students' list (we will call the studentListItems we defined above)
         - page : the page that the selected 10 is supposed to be displayed
      
      What else is there:
         - firstIndex : The first list item's index of the page
         - lastIndex : The last list item's index of the page
         - for loop to iterate through the list items
         - if condition to set whether they have the index between first and last index (including both)

# 2 Function appendPageLinks
         creates pagination buttons. 
         places to the DOM. 
         adds functionality to the buttons. 
         
      Parameters:
         - list : all of the students' list (we will call the studentListItems we defined above)
      
      What else is there:
         - pageAmount : The amount of pages. Found by dividing list's length to per page
         - created pagination div and its content of ul.
         - for loop to iterate through the page amount and set buttons with the iteration
         - set the first a tag to active
         - Event listener for the pagination Ul: 
            -- loops all the a tags (aTags) and removes the class names. 
            -- sets the class name for clicked button active.
            -- the studentListItems and target's text content(which we set as pageNumber) are sent as arguments to the showPage func.


# 3 Function searchBox -> needs work
- I have not found a way to make it work correct.
