// JavaScript source code
function daysBetween(date1, date2) {

    // Use the getTime() method and unixtime and divide by 1000 to get seconds
    date1_unixtime = parseInt(date1.getTime() / 1000);
    date2_unixtime = parseInt(date2.getTime() / 1000);

    // calculated difference in seconds
    var timeDifference = date2_unixtime - date1_unixtime;
   
    // in hours
    var timeDifferenceInHours = timeDifference / 60 / 60;
    

    // in days
    var timeDifferenceInDays = timeDifferenceInHours / 24;
  

    var timeDifferenceInYears = timeDifferenceInDays / 365.25;
    

    //in months
    var timeDifferenceInMonths = timeDifferenceInDays / 12;
   	

    var timeDifferenceInYears = timeDifferenceInDays;
    
    return Math.round(timeDifferenceInYears);
}
