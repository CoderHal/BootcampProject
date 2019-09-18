let empl = [
    {id: 1, name: 'Kerim'},
    {id: 2, name: 'Alima'},
    {id: 3, name: 'Musa'},
]

let attend = [
    {id: 1, emplyId: 2, timeIn: '45:34', timeOut: '45:34'},
    {id: 2, emplyId: 1, timeIn: '45:54', timeOut: '45:34'},
    {id: 3, emplyId: 3, timeIn: '46:34', timeOut: '45:34'},
]


let table = []

for (let i = 0; i < empl.length; i++){
    let row = {}
    let id = empl[i].id
    let atten = attend.filter((elem)=> elem.emplyId == id)[0]
    row.name = empl[i].name
    row.timeIn = atten.timeIn
    row.timeOut = atten.timeOut

    table.push(row)

}

console.log(table)