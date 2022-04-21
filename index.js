const catAccessories = ['catball', 'brush', 'catbin', 'box', 'catbowl', 'catshampoo', 'catfur']

function catSearch(arr, text) {
   /*  const catSearch = catAccessories.map(catThing => catThing.search('cat')) */
    const catSearch = catAccessories.filter(catThing => catThing.includes(text))
    
    return catSearch.length > 5 ? catSearch.slice(0, 5) : catSearch 
/*     return catSearch */
}

/* console.log(catSearch(catAccessories, 'cat')) */

module.exports = catSearch