const numbers = [25, 41, 54, 45, 33, 68, 21];
const friend = [{ id: '01', name: 'oishee', age: '21', gender: 'femele' }];
// const array object to index

//console.log(friend[0].name);
//console.log(numbers[3]);


const friends = [
    {
        id: '01',
        name: 'oishee',
        age: '21',
        gender: 'femele'
    },
    {
        id: '02',
        name: 'simu',
        age: '22',
        gender: 'femele',
        friend: {
            name: 'sazib',
            address: {
                vill: 'rayna',
                dis: 'natore'
            }
        }
    },
    {
        id: '03',
        name: 'jannat',
        age: '20',
        gender: 'femele'
    }];

// how to bring valu 
// console.log(friends[2].name);

//access with another objects value
//console.log(friends[1].friend.address.dis);


const gayes= [
    {
        id: "01",
        name: "komola",
        age: 23,
        gender: "female",
    },
    {
        id: "02",
        name: "joy",
        age: 21,
        gender: "male",
        friends: [
            {
                name: 'sajib',
                address: {
                    vill: 'rayna',
                    dis: "natore"
                }
            },
            {
                name: 'raju',
                address: {
                    vill: 'pabna',
                    dis: "pabna"
                }
            }
        ]
    },
    {
        id: "03",
        name: "esrat",
        age: 25,
        gender: "female",
    },
];

console.log(gayes[1].friends[0].address.vill);








