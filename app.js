const org1_depts = [
    {
        name: 'accounting' ,
        children: [
            { name: 'accounting payable', children: [] },
            { name: 'accounting receivable', children: [] },
        ],
    },
    {
        name: 'finance',
        children: [],

    },
]
const start_tag = '<ul>'
const end_tag = '</ul>'
const start_li = '<li>'
const end_li = '</li>'
var output = start_tag

for (let a=0, b=org1_depts.length; a<name; a++) {
    var objNF= JSON.stringify(org1_depts[a].name);
    var objF= objNF.replace(/\"/g, "")
    output += start_li + objF;
}
output += end_li
output += end_tag
const outputDiv= document.getElementById('output')
outputDiv.innerHTML= output

const org2_depts = [
    {
        name: 'accounting',
        children: [
            { name: 'accounting payable', children: [] },
            {
                name: 'accounting receivable',
                children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
            },
        ],
    },
    {
        name: 'finance',
        children: [{ name: 'investment', children: [] }],
    },
]