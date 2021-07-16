let employeeCards = '';

function generateHTML(allEmployees){
    allEmployees.forEach(employee =>{
         employeeCards += generateCards(employee);
    });

    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <link rel="stylesheet" type="text/css" href="/assets/style.css" media="screen" />
                <title>Team Profile Generator</title>
            </head>
            <body>
                <div class="jumbotron text-center">
                    <h1>Team Member Profiles</h1>
                </div>
                ${employeeCards}
            </body>
            </html>`;
}

function generateCards(employee){
    switch(employee.getRole()) {
        case "Manager":
            return `<section>
                    <div class="col-sm-4" style= "width: 18rem; background-color: grey;">
                    <h5 class="card-header">${employee.getRole()} &#128681;: ${employee.getName()}</h5>
                    <ul>
                        <li> ID &#128681;: ${employee.getID()} </li>
                        <li> Email Address &#128231; :${employee.getEmail()}</li>
                        <li> Office &#127984;: ${employee.getOfficeNumber()} </li>
                    </ul>
                    </div>
                    </section>`
                    break;

        case "Engineer":
            return `<section>
                    <div class="col-sm-4" style= "width: 18rem; background-color: teal;">
                    <h5 class="card-header">${employee.getRole()} &#128119;: ${employee.getName()}</h5>
                    <ul>
                        <li> ID &#128681;: ${employee.getID()} </li>
                        <li> Email Address &#128231; :${employee.getEmail()}</li>
                        <li> GitHub &#128187;: ${employee.getGithub()} </li>
                    </ul>
                    </section>`
                    break;

        case "Intern":
            return `<section
                    <div class="col-sm-4" style= "width: 18rem; background-color: lavender;">
                    <h5 class="card-header">${employee.getRole()} &#128296;: ${employee.getName()}</h5>
                    <ul>
                        <li> ID &#128681;: ${employee.getID()} </li>
                        <li> Email Address &#128231;: ${employee.getEmail()}</li>
                        <li> School &#127891;: ${employee.getSchool()} </li>
                    </ul>
                    </section>`
                    break;
    }
};

module.exports = generateHTML;