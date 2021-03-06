# Song Starter
---
#### Table of Contents
- [Introduction](#Introduction)
- [Features](#Features)
- [Technologies](#Technologies)
- [Contributions](#Contributions)
- [Author](#Author)
---
## Introduction

Hate starting new songs? Get started!

Starting a new song can be hard. Your lyrics feel uninspired. You keep falling into the same chord progressions. It's too hard to be original. Let the app do the work for you.

## Features

- Create a song at the click of a button!
- Choose which key to write a song in, and choose between major and minor.
- Want to add a little spice, add seventh chords!
- A song is generated with four lines of poetry, and a set of four chords.
- Play the chords by clicking on them!
- View the full poem, OR write your own lyrics.
- Songs can be saved and retrieved at a later date, thanks to local storage.

## Deployed

[Visit the site and give it a try!](https://song-starter.herokuapp.com/)


### Categories:
- [Home Page](#Home-Page)

- [Song Display](#Song-Display)

- [Saved Songs](#Saved-Display)

- [Full Poem](#Full-Poem)

- [User Lyrics](#User-Lyrics)

- [Error Message](#Error-Message)

- [Mobile](#Mobile)


#### Home Page
When the application is opened, a set of instructions is displayed below the header.

<details>
<summary>Home page example</summary>
<br>
  <img width="450" alt="Screen Shot 2021-03-07 at 5 11 11 PM" src="https://user-images.githubusercontent.com/64617435/110260137-3ce68a00-7f68-11eb-95a9-19333b1deb8e.png">
</details>

#### Song Display
A user can select a key, choose major or minor, or to display 'seventh' chords.
When a user clicks "New Song" a song with four lines of poetry, and four chords in the chosen key, are displayed.
A user can even click on each chord, to hear it!

<details>
<summary>The song display with lyrics and chords</summary>
<br>
<img width="450" alt="The song display with lyrics and chords" src="https://media.giphy.com/media/EPOJoOJFQ1DHW6BlUT/giphy.gif">
</details>

#### Saved Display
If a user likes what they've made, they can click on "Save Song".
Saved songs are displayed on the "Saved Songs" page.
A user can choose to view the song in it's intirety just by clicking "Show Song".

<details>
<summary>User saving songs</summary>
<br>
<img width="450" alt="User saving songs" src="https://media.giphy.com/media/2CjbZH7QHA0lOneLwc/giphy.gif">
</details>

#### Full Poem
If a user wants to view more than four lines of the poem, they can select "see full poem" at the bottom of the lyric display.
The full poem will be displays on a new page.

<details>
<summary>Full poem being displays</summary>
<br>
<img width="450" alt="Full poem being displays" src="https://media.giphy.com/media/Tlj2LLOZoJ6lHObuYU/giphy.gif">
</details>

#### User Lyrics
Users can choose to add their own lyrics by clicking on 'add your own lyrics'.
These lyrics can be added to their song, and will be saved with the chord progression."

<details>
<summary>User adding new lyrics</summary>
<br>
<img width="450" alt="User adding new lyrics" src="https://media.giphy.com/media/RiJq7CbKue5Na5PZ4r/giphy.gif">
</details>

#### Error Message
If a URL path doesn't exist, or a fetch call fails, an error message is displayed.

<details>
<summary>Error message is displaying!</summary>
<br>
<img width="450" alt="Error message being displayed" src="https://user-images.githubusercontent.com/64617435/110261284-d31caf00-7f6c-11eb-84e9-22ae44928995.png">
</details>

#### Mobile
Song Start can also be used on mobile devices.

<details>
<summary>Mobile view!</summary>
<br>
<img width="450" alt="Error message being displayed" src="https://media.giphy.com/media/MA7imX21FSCyIuMw9j/giphy.gif">
</details>

#### Technologies
- React
- [TonalJS](https://github.com/tonaljs/v2)
- [PoetryDB](https://github.com/thundercomb/poetrydb/blob/master/README.md)
- [Howler.js](https://github.com/goldfire/howler.js#documentation)
- Router
- Cypress for Testing
- CSS / SASS
- HTML
- Lighthouse for accessibility auditing

## Future Iterations

- User can search for keywords in the poetry database.
- User can have automated playback with their chord progression.
- User can set tempo for chords to play.
- User can choose to have chords play once, twice, or four times per measure.
- Service worker to cache sound files and speed up loading.

#### Contributions

Thank you <a href="https://github.com/GreysonElkins/GreysonElkins">Greyson Elkins</a>, for your guidance, advice, and code review.

#### To Contribute

To contribute, or view the file architecture, clone this repo:
- `git clone git@github.com:DrewBradley/song-starter.git`<br>

Change directories into the root directory:
- `cd song-starter`<br>

Install dependencies:
- `npm install`<br>

Create a new branch and name it according to your contribution:
- `git checkout -b <your-name>/feature/<your-feature-name>`<br>

Check the `package.json` to familiarize yourself with dependencies:
- `Tonal` and `Howler`<br>
- `cypress`<br>

To test files, run [cypress.io](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
- `npm run cypress`
- When cypress opens, select which test to run. Files should end in `spec.js`.

## Author
<table>
    <tr>
        <td> Drew Bradley <a href="https://github.com/DrewBradley">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/64617435?s=400&u=b01f8dbfd68b65ddd1d720d8525806f267a06426&v=4" alt="Drew Bradley"
 width="150" height="auto" /></td>
</table>
