const fs=require('fs')
const addStudent=(id,name,total,comment)=>{
    const student=load()
   
   const duplicate=student.filter((obj)=>{
        return obj.id===id
})
console.log(duplicate) 
if (duplicate.length==0){
    student.push({
        id,
        name,
        total,
        comment
    })
    
    saveStudent(student)
    console.log("save successfully")
}
else {
    console.log("error duplicate")
}

}

const load=() =>{

    try{
    const data = fs.readFileSync('student.json').toString()
    console.log(data) 
    return JSON.parse(data) 
    }
    catch{
        return []
    }
}


const saveStudent = (student) =>{
    
    console.log(student)
     
    const dataSave = JSON.stringify(student)
    console.log(dataSave)
    fs.writeFileSync('student.Json',dataSave)
    
}

const deletes=(id)=>{
const student=load()
const keepStudent =student.filter((obj)=>{
     return obj.id!==id
     
})
saveStudent(keepStudent)
console.log(keepStudent)
console.log( "successfully delete")
       
}

const list=()=>{
    const student=load()
    student.forEach(ele=>{
        console.log(ele)
    });
}


const read=(id)=>{
    const student=load()
    const readStudent =student.find((obj)=>{
        obj.id==id
    })
    console.log(readStudent)
    if(readStudent){
   
    console.log( "id is "+readStudent.id) 
    console.log( "name is"+readStudent.name)
    console.log("total degree"+readStudent.total)
console.log("comment is"+readStudent.comment)}
        else{
    console.log("not found")
}

}

 module.exports={
    addStudent,
    deletes,
    list,
    read,
    
   
}
