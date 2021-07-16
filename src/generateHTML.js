let employeeCards = '';

function generateHTML(employeeTeam){
    employeeTeam.forEach(employee =>{
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
                    <h1 class="h-100 display-5 fw-bold">Team Member Profiles</h1>
                </div>

                <div class="d-grid gap-2">
                ${employeeCards}
                </div>

            </body>
            </html>`;
}

function generateCards(employee){
    switch(employee.getRole()) {
        case "Manager":
            return `<section>
                    <div class="mx-auto mb-3" style= "width: 25rem; background-color: grey;">
                    <h5 class="card-header">&#128081; ${employee.getRole()}: ${employee.getName()}</h5>
                    <ul>
                        <li>&#128681; ID: ${employee.getID()}</li>
                        <li>&#128231; Email Address: ${employee.getEmail()}</li>
                        <li>&#127984; Office: ${employee.getOfficeNumber()}</li>
                    </ul>
                    </div>
                    </section>`
                    break;

        case "Engineer":
            return `<section>
                    <div class="mx-auto mb-3" style= "width: 25rem; background-color: aquamarine;">
                    <h5 class="card-header">&#128119; ${employee.getRole()}: ${employee.getName()}</h5>
                    <ul>
                        <li>&#128681; ID: ${employee.getID()}</li>
                        <li>&#128231; Email Address: ${employee.getEmail()}</li>
                        <li>&#128187; GitHub: ${employee.getGithub()}</li>
                    </ul>
                    </section>`
                    break;

        case "Intern":
            return `<section
                    <div class="mx-auto mb-3" style= "width: 25rem; background-color: lavender;">
                    <h5 class="card-header">&#128296; ${employee.getRole()}: ${employee.getName()}</h5>
                    <ul>
                        <li>&#128681; ID: ${employee.getID()}</li>
                        <li>&#128231; Email Address: ${employee.getEmail()}</li>
                        <li>&#127891; School: ${employee.getSchool()}</li>
                    </ul>
                    </section>`
                    break;
    }
};

module.exports = generateHTML;