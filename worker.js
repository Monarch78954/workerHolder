addEventListener('message', ({data}) => {
    if(data.action == 'count'){
                 var i=0;
                 for(i=0;i<200000000000;i++){
                    postMessage({action:'count',value:i})
                 }
    }
})
