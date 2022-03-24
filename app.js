const app = Vue.createApp({
    data(){
        return {
            courseGoal :'Finish the course ',
            vueLink : 'https://www.samanja.dev/'
        };
    }, 
    methods: {
        outputGoal
    }
});

app.mount('#user-goal')