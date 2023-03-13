console.log('running');

const addEmail = ()=>{
    try {
        if(!navigator.clipboard){
            alert('clipboard unabled');
            document.getElementById('clipboardUnabled').style.display = 'block';
            
        }
        else{
            navigator.clipboard.writeText('28008@students.riphah.edu.pk');
            alert('Email copied to clipboard');
        }
    } catch (error) {
        
    }
}

const addWhatsApp = ()=>{
    try {
        if(!navigator.clipboard){
            document.getElementById('clipboardUnabled').style.display = 'block';
            alert('clipboard unable');
        }
        else{
            navigator.clipboard.writeText('03110644893');
            alert('Whatsapp copied to clipboard');

        }
        
    } catch (error) {
        console.log(error)
    }
}