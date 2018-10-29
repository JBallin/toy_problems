Implement a constructor that

takes the name of the TV show and stores it
Add a property named views and set it to an empty array

Add a method named trackView

make it a class property
make it async
make it an arrow function
when you call trackView it
calls getShow() to get the show
adds the current date to the object returned by getShow()
adds that object to the views property
add a method called summary

that returns the views in the format "show name (show id) date"
for example:

[
  "Friends (1) Thu Aug 17 2017 12:49:16 GMT-0500 (CDT)",
  "Friends (1) Thu Aug 17 2017 12:50:33 GMT-0500 (CDT)",
]
