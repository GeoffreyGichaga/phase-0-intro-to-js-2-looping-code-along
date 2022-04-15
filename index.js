// Code your solutions in this file


function writeCards(name,event){
    let messages = []
    

    for(let i = 0;i<name.length;i++)
    {
        let outputMsg = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
        messages.push(outputMsg)

    
        

    }
    return messages

}

function countDown(num)
{
    let count = num;
    while(count>=0)
    {
        console.log(count);
        count--
    }
}


   

