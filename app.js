const app = Vue.createApp({
    data() {
        return {
            name: 'Rikuto Mikado',
            age: 18,
            imageUrl: 'assets/mygithubicon.png'
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        },
    }
});

app.mount('#assignment');