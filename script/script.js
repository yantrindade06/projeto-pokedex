class Pokedex {
    constructor() {
        this.pokemons = [];
        this.filteredPokemons = [];
        this.init();
    }

    async init() {
        this.showLoading();
        await this.loadInitialPokemons();
        this.hideLoading();
        this.renderPokemons();
        this.setupEventListeners();
    }


    getInitialPokemons() {
        return [
            // Gen 1
            { name: 'bulbasaur', gen: 1, types: ['grass', 'poison'], hp: 45, attack: 49, def: 49, speed: 45, spatk: 65, spdef: 65, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
            { name: 'charmander', gen: 1, types: ['fire'], hp: 39, attack: 52, def: 43, speed: 65, spatk: 60, spdef: 50, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
            { name: 'squirtle', gen: 1, types: ['water'], hp: 44, attack: 48, def: 65, speed: 43, spatk: 50, spdef: 64, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },

            // Gen 2
            { name: 'chikorita', gen: 2, types: ['grass'], hp: 45, attack: 49, def: 65, speed: 45, spatk: 49, spdef: 65, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png' },
            { name: 'cyndaquil', gen: 2, types: ['fire'], hp: 39, attack: 52, def: 43, speed: 65, spatk: 60, spdef: 50, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png' },
            { name: 'totodile', gen: 2, types: ['water'], hp: 50, attack: 65, def: 64, speed: 43, spatk: 44, spdef: 48, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png' },

            // Gen 3
            { name: 'treecko', gen: 3, types: ['grass'], hp: 40, attack: 45, def: 35, speed: 70, spatk: 65, spdef: 55, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png' },
            { name: 'torchic', gen: 3, types: ['fire'], hp: 45, attack: 60, def: 40, speed: 45, spatk: 70, spdef: 50, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png' },
            { name: 'mudkip', gen: 3, types: ['water'], hp: 50, attack: 70, def: 50, speed: 40, spatk: 50, spdef: 50, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png' },

            // Gen 4
            { name: 'turtwig', gen: 4, types: ['grass'], hp: 55, attack: 68, def: 64, speed: 31, spatk: 45, spdef: 55, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png' },
            { name: 'chimchar', gen: 4, types: ['fire'], hp: 50, attack: 62, def: 44, speed: 61, spatk: 58, spdef: 44, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png' },
            { name: 'piplup', gen: 4, types: ['water'], hp: 53, attack: 51, def: 53, speed: 40, spatk: 61, spdef: 56, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png' },

            // Gen 5
            { name: 'snivy', gen: 5, types: ['grass'], hp: 45, attack: 45, def: 55, speed: 63, spatk: 45, spdef: 55, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png' },
            { name: 'tepig', gen: 5, types: ['fire'], hp: 65, attack: 63, def: 45, speed: 45, spatk: 45, spdef: 45, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png' },
            { name: 'oshawott', gen: 5, types: ['water'], hp: 55, attack: 55, def: 45, speed: 45, spatk: 63, spdef: 45, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png' },

            // Gen 6
            { name: 'chespin', gen: 6, types: ['grass'], hp: 56, attack: 61, def: 65, speed: 38, spatk: 48, spdef: 45, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png' },
            { name: 'fennekin', gen: 6, types: ['fire'], hp: 40, attack: 45, def: 40, speed: 60, spatk: 62, spdef: 60, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png' },
            { name: 'froakie', gen: 6, types: ['water'], hp: 44, attack: 56, def: 40, speed: 71, spatk: 62, spdef: 44, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png' },

            // Gen 7
            { name: 'rowlet', gen: 7, types: ['grass', 'flying'], hp: 68, attack: 42, def: 55, speed: 50, spatk: 50, spdef: 50, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png' },
            { name: 'litten', gen: 7, types: ['fire'], hp: 45, attack: 65, def: 40, speed: 70, spatk: 60, spdef: 40, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png' },
            { name: 'popplio', gen: 7, types: ['water'], hp: 50, attack: 54, def: 54, speed: 40, spatk: 66, spdef: 56, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png' },

            // Gen 8
            { name: 'grookey', gen: 8, types: ['grass'], hp: 50, attack: 65, def: 55, speed: 65, spatk: 40, spdef: 50, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png' },
            { name: 'scorbunny', gen: 8, types: ['fire'], hp: 50, attack: 65, def: 40, speed: 69, spatk: 40, spdef: 40, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png' },
            { name: 'sobble', gen: 8, types: ['water'], hp: 50, attack: 40, def: 40, speed: 70, spatk: 70, spdef: 40, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png' },

            // Gen 9
            { name: 'sprigatito', gen: 9, types: ['grass'], hp: 40, attack: 61, def: 45, speed: 65, spatk: 61, spdef: 54, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png' },
            { name: 'fuecoco', gen: 9, types: ['fire'], hp: 67, attack: 45, def: 45, speed: 36, spatk: 59, spdef: 63, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png' },
            { name: 'quaxly', gen: 9, types: ['water'], hp: 55, attack: 65, def: 45, speed: 50, spatk: 65, spdef: 45, sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png' }
        ];
    }

    showLoading() {
        document.getElementById('loading').classList.remove('hidden');
        document.getElementById('pokemonGrid').style.display = 'none';
    }

    hideLoading() {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('pokemonGrid').style.display = 'grid';
    }

    async loadInitialPokemons() {
        this.pokemons = this.getInitialPokemons();
        this.filteredPokemons = [...this.pokemons];
    }

    setupEventListeners() {
        const searchInput = document.getElementById('searchInput');
        const clearSearch = document.getElementById('clearSearch');

        searchInput.addEventListener('input', (e) => this.searchPokemons(e.target.value));
        clearSearch.addEventListener('click', () => {
            searchInput.value = '';
            this.searchPokemons('');
        });
    }

    searchPokemons(query) {
        const normalizedQuery = query.toLowerCase().trim();
        
        if (normalizedQuery === '') {
            this.filteredPokemons = [...this.pokemons];
            document.getElementById('noResults').classList.add('hidden');
        } else {
            this.filteredPokemons = this.pokemons.filter(pokemon => 
                pokemon.name.includes(normalizedQuery)
            );
            
            if (this.filteredPokemons.length === 0) {
                document.getElementById('noResults').classList.remove('hidden');
            } else {
                document.getElementById('noResults').classList.add('hidden');
            }
        }
        
        this.renderPokemons();
    }

    getTypeColor(type) {
        const colors = {
            grass: '#4CAF50',
            fire: '#FF5722',
            water: '#2196F3',
            poison: '#9C27B0',
            flying: '#03A9F4'
        };
        return colors[type] || '#757575';
    }

    renderPokemons() {
        const grid = document.getElementById('pokemonGrid');
        grid.innerHTML = '';

        this.filteredPokemons.forEach(pokemon => {
            const card = this.createPokemonCard(pokemon);
            grid.appendChild(card);
        });
    }

    createPokemonCard(pokemon) {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `
            <h3>${pokemon.name}</h3>
            <img src="${pokemon.sprite}" alt="${pokemon.name}" class="pokemon-sprite" loading="lazy">
            <div class="pokemon-info">
                ${pokemon.types.map(type => 
                    `<span class="type" style="background: ${this.getTypeColor(type)}">${type}</span>`
                ).join('')}
                <span class="generation">Gen ${pokemon.gen}</span>
            </div>
            <div class="stats">
                <div class="stat">
                    <span>HP</span>
                    <span class="stat-value">${pokemon.hp}</span>
                </div>
                <div class="stat">
                    <span>ATK</span>
                    <span class="stat-value">${pokemon.attack}</span>
                </div>
                <div class="stat">
                    <span>DEF</span>
                    <span class="stat-value">${pokemon.def}</span>
                </div>
                 <div class="stat">
                    <span>SPEED</span>
                    <span class="stat-value">${pokemon.speed}</span>
                </div>
                <div class="stat">
                    <span>SP.ATK</span>
                    <span class="stat-value">${pokemon.spatk}</span>
                </div>
                  <div class="stat">
                    <span>SP.DEF</span>
                    <span class="stat-value">${pokemon.spdef}</span>
                </div>
            </div>
        `;
        return card;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new Pokedex();
});