/*There is a JSON file with students. Make a call to the file and get the following data from it:

All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24
All male students with a name starting with B and average grade over 2
Use higher order functions to find the answers Link:
https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json */


fetch(" https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
    .then(function(response){
        let data = response.json()
        return data
    }).then(function(data){
        console.log(data)
        let studentsGradesHigh3 = data.filter(x => x.averageGrade >3);
        console.log(studentsGradesHigh3)

        let FemaleWithAverageGrade5= data.filter(x => x.gender === "Female").filter(x => x.averageGrade ===5)
        console.log(FemaleWithAverageGrade5)

        let MaleFromSkopjeover18 = data.filter(x => x.city === "Skopje").filter(x => x.age >=18).map(x => {
           return{  fullName: x.firstName + " " + x.lastName }
        })
        console.log(MaleFromSkopjeover18)

        let FemaleWithAged24AverageGrades= data.filter(x => x.gender === "Female").filter(x => x.age >24 ).map(x => x.averageGrade)
        console.log(FemaleWithAged24AverageGrades)

        let MaleonBAverageGrade2 = data.filter(x => x.gender === "Male" ).filter(x => x.averageGrade > 2)
        .map(x => x.firstName)
        console.log(MaleonBAverageGrade2)

    }).catch(function(error){
        console.log("error")
    })
    
