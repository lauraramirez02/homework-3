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

function listOrg(orgData, targetUL){
    var i;
    for (i=0; i <orgData,length; i++) {
        if (orgData[i].hasOwnProperty('name')) {
            var nameText= document.createTextNode(orgData[i].name);
            var newLI= document.createElement('li');
            newLI.appendChild(nameText);
            targetUL.appendChild(newLi);
        }
        if (orgData[i].hasOwnProperty('children')){
            var newUL = document.createElement('ul');
            var lowUl = targetUL.appendChild(newUL);
            var lowUL = targetUL.querySelector('ul');
            listOrg(orgData[i].children.lowUL);
        }
    }
}
PrintDepts(org1_depts,document.getElementById("org1"));
PrintDepts(org2_depts,document.getElementById("org2"));