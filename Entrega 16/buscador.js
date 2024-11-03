document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const country = document.getElementById('countryInput').value;

    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('País no encontrado');
            }
            return response.json();
        })
        .then(data => {
            const countryData = data[0]; 
            document.getElementById('countryInfo').innerText = `Capital: ${countryData.capital[0]} 
            Lenguajes: ${Object.values(countryData.languages).join(', ')}`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('countryInfo').innerText = 'Error al buscar el país.';
        });
    });
