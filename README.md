# GCI Coding Exercise

# Getting Setup

Clone the repo and run `npm install`.

Run the command `npm start` to launch the app in your browser.

# Notes

Not having used React/Redux before, I used [yeoman](http://yeoman.io/) to
generate a react/redux scaffold to give me a structure to follow.  This was
immensely useful for wrapping my head around the Flux/Redux lifecycle.

In the interest of time, I didn't have a ton of time to make the application
nearly as polished as I would prefer, but I believe the application should
showcase an understanding of React and Flux together.

One final note, there are some syntax inconsistencies within the code - for
example: the generator uses semicolons, but I based my javascript syntax off of
[Standard JS](https://standardjs.com/), which doesn't use semicolons.  Given
more time, I would have absolutely made sure all code followed the same syntax
formatting.

# Requirements

Create a simple user management application using React and Flux.

Acceptance criteria:
* [x] Displays a list of users using JSX
* [x] Can add and remove users
* [x] Can update existing user information
* [x] Has a basic UI (something more than unformatted text on a screen)

User info includes
* [x] First name
* [x] Last name
* [x] Address

User data should be maintained in the store, and modified through actions. It
does not have to persist outside of the application (no external JSON files or
endpoints necessary). We’re looking for an understanding of:

* How to use React’s state and props
* The React and Flux lifecycles
* ES6 Javascript

The environment you use is up to you. Please make your code accessible through
Git and be prepared to share it with the team.
