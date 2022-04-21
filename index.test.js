const catSearch = require ('./index')

const mockDb = ['catball2', 'brush2', 'catbin2', 'box2', 'catbowl2', 'catshampoo2', 'catfur2']


/* it('this is my first test', ()=>{
    expect('hello').toEqual('hello')
    catSearch(mockDb, 'cat')
}) */

/* it('search with empty result', ()=>{
    expect(catSearch(mockDb, 'zzz')).toEqual([])

}) */

it('real search with cat keyword', ()=>{
    expect(catSearch(mockDb, 'cat')).toEqual(['catball', 'catbin', 'catbowl', 'catshampoo', 'catfur'])

})