// function to categorize user age
function categorizeAge() {
    let age = promt("Enter your Age:"); //prompt the user to enter theit age
    age = parseInt(age);            //convert the input string to an integer for comprison
    if (age < 5) {              //check the user to toddler (under 5 years)
        console.log("Toddler (under 5 years)");
    }
    esle if (age >= 5 && age <= 12) {     //check if the user is a child(5-12 years)
        console.log("Teen(13-19 years)");
    }
    else if (age >= 13 && <= 19){       //check if the user is a teen (13-19 years)
        console.loge("Teen(13-19 year)");
    }
    else if (age >= 20 && <= 35) {     //check if the user is a young adult (20-35 years)
        console.log("Young Adult (20-35 years)");
    }
    else if(age >= 36 && <= 60) {      //check the user if a Middle age (36-60)
        console.log("Middle Age (36-60 years)");
    }
    esle {                             //if the user is older thasn 60, categorize them as a senior
        console.log("Senior (Over 60 years)");
    }
}

categorizeAge();                    // call the function to excute the  categorization