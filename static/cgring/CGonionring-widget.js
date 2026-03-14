// onionring.js is made up of four files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium house, last updated 2020-11-24

// === ONIONRING-WIDGET ===
//this file contains the code which builds the widget shown on each page in the ring. ctrl+f 'EDIT THIS' if you're looking to change the actual html of the widget

var tag = document.getElementById(ringID); //find the widget on the page

thisSiteCG = window.location.href; //get the url of the site we're currently on
thisIndexCG = null;

// go through the site list to see if this site is on it and find its position
for (i = 0; i < cgSites.length; i++) {
  if (thisSiteCG.startsWith(cgSites[i])) { //we use startswith so this will match any subdirectory, users can put the widget on multiple pages
    thisIndexCG = i;
    break; //when we've found the site, we don't need to search any more, so stop the loop
  }
}

function randomSiteCG() {
  otherCgSites = cgSites.slice(); //create a copy of the sites list
  otherCgSites.splice(thisIndexCG, 1); //remove the current site so we don't just land on it again
  randomIndexCG = Math.floor(Math.random() * otherCgSites.length);
  location.href = otherCgSites[randomIndexCG];
}

//if we didn't find the site in the list, the widget displays a warning instead
if (thisIndexCG == null) {
  tag.insertAdjacentHTML('afterbegin', `
<table>
  <tr>
    <td>You haven't joined ${ringName} webring yet. Send a message to the owner to join!</td>
  </tr>
</table>
  `);
}
else {
  //find the 'next' and 'previous' sites in the ring. this code looks complex
  //because it's using a shorthand version of an if-else statement to make sure
  //the first and last sites in the ring join together correctly
  previousIndexCG = (thisIndexCG-1 < 0) ? cgSites.length-1 : thisIndexCG-1;
  nextIndexCG = (thisIndexCG+1 >= cgSites.length) ? 0 : thisIndexCG+1;

  indexText = ""
  //if you've chosen to include an index, this builds the link to that
  if (useIndexCG) {
    indexTextCG = `<a target="_blank" href='${indexPageCG}'>INDEX</a> | `;
  }

  randomText = ""
  //if you've chosen to include a random button, this builds the link that does that
  if (useRandom) {
    randomText = `<a href='javascript:void(0)' onclick='randomSiteCG()'>⇆</a> | `;
  }

  //this is the code that displays the widget - EDIT THIS if you want to change the structure
  tag.insertAdjacentHTML('afterbegin', `
  <table class="centerTable">
    <tr>
      <td class='webring-prev'><a href='${cgSites[previousIndexCG]}'>⇐</a></td>
      <td class='webring-info'><img src="https://zodiacs.b-cdn.net/misc/holdingHands.png" style="height: 50px; width: auto;"></br>
      <span class='webring-links'>
        ${randomText}
        ${indexTextCG}
        <a href='https://allium.house/garden/onionring/'>!?</a></span></td>
      <td class='webring-next'><a href='${cgSites[nextIndexCG]}'>⇒</a></td>
    </tr>
  </table>
  `);

}
