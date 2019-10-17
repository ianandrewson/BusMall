export const generateShownChart = (productArray) => {
    const ctx = document.getElementById('shown-chart').getContext('2d');
    
    const data = [];
    const displayLabels = [];
    productArray.forEach(obj => {
        if (obj.productShownScore > 0) {
            data.push(obj.productShownScore);
            displayLabels.push(obj.name);
        }
    });

    //const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: displayLabels,
            datasets: [{
                label: '# of Times Shown',
                data: data,
                backgroundColor: 'black'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
};


export const generateClickedChart = (productArray) => {
    const ctx = document.getElementById('clicked-chart').getContext('2d');
    
    const data = [];
    const displayLabels = [];
    productArray.forEach(obj => {
        if (obj.productPickedScore > 0) {
            data.push(obj.productPickedScore);
            displayLabels.push(obj.name);
        }
    });

    //const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: displayLabels,
            datasets: [{
                label: '# of Votes',
                data: data,
                backgroundColor: 'black'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
};