const outputDiv = document.getElementById('output')

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

function PrintDepts(depts, parent) {
    var listObj = document.createElement('ul')

    for(let i=0; i < depts.length; i++) {
        let currentItem = depts[i]
        var listItemObj = document.createElement('li')
        listItemObj.innerHTML = currentItem.name
        listObj.appendChild(listItemObj)
        if(currentItem.children.length) {
            PrintDepts(currentItem.children, listItemObj)
        }
    }
    if(parent) {
        parent.appendChild(listObj)
    }
    else{
        outputDiv.appendChild(listObj)
    }
}
var h2 = document.createElement('h2')
h2.innerHTML = 'Organization 1';
outputDiv.appendChild(h2)
PrintDepts(org1_depts)

var h2 = document.createElement('h2')
h2.innerHTML = 'Organization 2';
outputDiv.appendChild(h2)
PrintDepts(org2_depts)

    
