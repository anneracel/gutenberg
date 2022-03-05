# gutenberg
Starter code to create project to query Project Gutenberg

Project Gutenberg is a site that makes available to text for books that have fallen past their copyright period. They have an API that allows you to search for books in their stacks. You can find the documentation for it here:

https://gutendex.com

There is an option to find all the authors within a given time period:

     https://gutendex.com/books?author_year_start=1800&author_year_end=1899

Have the user pick a year range. If the user picks a start year that is greater than the end year, reverse them. If the user picks a year in the future, change that to the current year.

