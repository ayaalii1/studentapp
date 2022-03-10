
const student = require('./student')
const yargs=require('yargs')

const  totalDegree=(degree)=>{    
    
        let total=0
       degree.forEach(deg => {
            total+=deg    });
           return total

          
                
    }

yargs.command({
    command:'add',
    describe:'Add student',
    
    builder:{
        id:{
            describe:'add your id',
            demandOption:true,
            type: 'number'    
           },
        name:{
            describe:' add your name',
            demandOption:true,
            type:'string'
        },
        degree:{
            describe:' add your degree',
            demandOption:true,
            type:'array'
        },
        Comment:{
            describe:' add comment',
           
            type:'string'
        }
    },
    handler:(y)=>{
        //console.log(y) 
        const total=totalDegree(y.degree)
      student.addStudent(y.id,y.name,total,y.comment)

    }
})
 
  yargs.command({
    command:'delete',
    describe:'Delete student',
    builder:{
        id:{
            describe:' delete command',
            demandOption:true,
            type:'number'
        }
    },
    handler:(x)=>{
        student.deletes(x.id)
        console.log('Delete student')
    }
})


yargs.command({
    command:'list',
    describe:'List student',
    handler:()=>{
        console.log('List student')
       student.list()
    }
})

// read

yargs.command({
    command:'read',
    describe:' read this student ',
    builder:{
        id:{
            describe:'read command',
            demandOption:true,
            type:'number'
        }
    },
    handler:(x)=>{
        student.read(x.id)
        console.log('about this student')
       
        
    }
})

 console.log(yargs.argv) 