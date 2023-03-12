console.log('running');

const addEmail = ()=>{
    try {
        navigator.clipboard.writeText('28008@students.riphah.edu.pk');
        alert('Email copied to clipboard');
    } catch (error) {
        
    }
}

const addWhatsApp = ()=>{
    try {
        navigator.clipboard.writeText('03110644893');
        alert('Whatsapp copied to clipboard');
        
    } catch (error) {
        console.log(error)
    }
}