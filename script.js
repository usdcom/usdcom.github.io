document.getElementById('step2').style.display = 'none';
username = '';

document.getElementById('step1next').addEventListener('click', function() {

    username = document.getElementById('username').value;
    spanname = document.getElementById('spanname');

    spanname.innerHTML = username;

    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';


});

document.getElementById('calculatecost').addEventListener('click', function() {
    revdate = document.getElementById('revdate').value;
    ainput = document.getElementById('paxno').value;

    date = new Date(revdate);

    result = document.getElementById('result');
    output = 0;

    if(ainput > 8) {
        output = 200;
    } else {
        output = ainput * 20;
    }

    if(isWeekend(date)) {
        output = output *1.5;
    }

    result.innerHTML = "$"+ output;

});

function isWeekend(date) {
    const day = new Date(date).getDay();
    return (day === 0 || day === 6); // 0 = Sunday, 6 = Saturday
}

