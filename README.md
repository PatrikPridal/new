# Aplikace Předpověď Počasí
Webový prohlížeč se po spuštění aplikace zažádá o přístup k poloze, poté načte polohu uživatele
s informacemi o předpovědi počasí na aktuální den + nadcházejících 5 dnů.

## Funkce
- Určení polohy uživatele
- Přepověď na aktuální den
- Vyhledávání počasí podle města a země

### Komponenty 
- Search.jsx (input pro vyhledávání plus tlačítko "Hledat")
- Weather.jsx (komponent pro zobrazení předpovědi)
- WeatherAndForecast.jsx (komponent pro učení aktuálního data  pomocí komponentů "Search.jsx" a "Weather.jsx")
- Header.jsx (hlavička s inputem, tlačítkem hledat)
- Forecast.jsx (komponent pro zobrazení předpovědi pod předpovědí na aktuální den)
- Loader.jsx (komponent s animací, když aplikace načítá data)
- Warning.jsx (varování když se zadané město neshoduje + informace o tom jak zadat město a zemi)

components/API/
- forwardGeocoding.jsx (vyhledávání specifické lokace podle zadání města + API key)
- reverseGeocoding.jsx (určení polohy uživatele pomocí latitude and longitude + API key)
- GetWeather.jsx (získávání informací o počasí z https://openweathermap.org + API key)