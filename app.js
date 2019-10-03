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

var list = document.getElementsByTagName ('ul')[0];

var newItemLast = document.createTextNode('li');
var newTextLast = document.createTextNode('accounting');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var newFirst = document.createElement('li');
var newTextFirst = document.createTextNode('finance');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);