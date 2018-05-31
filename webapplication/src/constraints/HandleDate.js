export const handleSplitDate = (dateData) =>{
    const result = dateData.split('T')[0];
    return result
}

export const handleCheckToday = (StartedDate, EndDay) =>{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    
    if(dd<10) {
        dd = '0'+dd
    } 
    
    if(mm<10) {
        mm = '0'+mm
    } 
    var d = `${yyyy}-${mm}-${dd}`
    var currentDate = new Date (d);
    var reStartedDate = new Date (StartedDate)
    var reEndDay = new Date (EndDay)
    currentDate.setHours(0,0,0,0)
    reStartedDate.setHours (0,0,0,0)
    reEndDay.getHours (0,0,0,0)
     if (currentDate >= reStartedDate && currentDate <= reEndDay){
        return 0
     }
     else if (currentDate > reEndDay){
         return -1
     }
     else if (currentDate < reStartedDate){
         return 1
     }
}

export const handleCreatedDate = (createdDate, choseDate) =>{
    var today = new Date ();
    var todayYear = createdDate.getFullYear ()
    var handledDateYear = choseDate.getFullYear ()
    return handledDateYear;
}

export const formatDateTime = (time) => {
    var customTime = new Date (time)
    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return customTime.getDate() + ' ' + monthArray[customTime.getMonth()] + ', ' +customTime.getFullYear()
}

export const formatLongTime  = (time) =>{
    var splitedTime = time.split (":")
    var hour = Number (splitedTime[0])
    var minute = Number (splitedTime[1])
    var dn = "AM"
    if (hour >12)
        {
            hour -=12
            dn = "PM"
        }
    if (minute<10){
        minute = '0' + minute
    }
    return `${hour}:${minute} ${dn}`
}