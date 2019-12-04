# meetupme-mobile

## Part 6
- nativebase: for button ease
- second half of part 6 is done by my windows pc
- no close button and + button on header and goBack is not working.

## Part 7 : create group meetup within button in mobile end.
- using react-native-elements to easily create the button and using form input
- using react-native-modal-datetime-picker to create the date time
- figure out that stacknavigator has default header and tab does not. SO here I create my own header and disable the header from stack in Root.js
- Noted problem
  - need a dialog to show successfully create the meetup. 

### Configurations 
- things change for own configuration: group id and ip address in api.js

## Frame or workflow of the app
- user table: 
  - user can create group and join group
  - user can create the meetup with his own group(? have differnt role of a group)
  - user can join the meetup under the group
- group table
  - it has its meetup id
  - has user info
  - maybe user role ?
- meetup table
  - has group info
  - has user 
