const contenedor = document.getElementById("miGrafico");
let cantidad = [80.350, 10.620, 1.458, 9.163, 11.971, 1.654, 2.368, 1.729, 3.017, 4.833, 1.802, 648, 2.368, 145, 92, 3.306, 8.160, 1.781];

let recintos = ['Santo Domingo',
    'Santiago',
    'San Pedro de Macorís',
    'San Juan',
    'San Fco de Macorís',
    'San Cristóbal',
    'Puerto Plata',
    'Neyba',
    'Nagua',
    'Mao/Stgo Rodríguez',
    'La Vega',
    'La Romana',
    'Higüey',
    'Hato Mayor',
    'Dajabón',
    'Constanza',
    'Bonao',
    'Barahona',
    'Baní'
];

const miGrafico = new Chart(contenedor, {
    type: 'bar',
    data: {
        labels: recintos,
        datasets: [{
            label: 'Recintos',
            data: cantidad,
            backgroundColor: [
                'rgba(130, 20, 10, 0.2)',
                'rgba(189, 76, 45, 0.2)',
                'rgba(245, 25, 78, 0.2)',
                'rgba(255, 187, 168, 0.2)',
                'rgba(250, 128, 114, 0.2)',
                'rgba(255, 255, 75, 0.2)',
                'rgba(230, 28, 128, 0.2)',
                'rgba(240, 130, 128, 0.2)',
                'rgba(255, 170, 122, 0.2)',
                'rgba(128, 128, 0, 0.2)',
                'rgba(0, 255, 255, 0.2)',
                'rgba(100, 55, 255, 0.2)'

            ],
            borderColor: [
                'rgba(189, 76, 45, 1)',
                'rgba(245, 25, 78, 1)',
                'rgba(255, 187, 168, 1)',
                'rgba(250, 128, 114, 1)',
                'rgba(255, 255, 75, 1)',
                'rgba(230, 28, 128, 1)',
                'rgba(240, 130, 128, 1)',
                'rgba(255, 170, 122, 1)',
                'rgba(128, 128, 0, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(100, 55, 255, 1)'
            ],
            borderWidth: 1.5
        }]
    },

})
