
export default class Search{
    constructor(query) {
        this.query = query;
        this.result = {};
    }

    async getResult (){
        const ApiKey = 'fc65f8e150ff50d818dd412b77dd3bb2';
        try{
            const res = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${ApiKey}&q=${this.query}`)
            const data = await res.json();
            return this.result = data.recipes;
        } catch (error) {
            console.log(error);
        }
    }
};