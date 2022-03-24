const app = Vue.createApp({
    data(){
        return {
            courseGoal :'Finish the course ',
            vueLink : 'https://www.samanja.dev/'
        };
    }, 
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return 'Learn Vue!';
            }
            else{
                return 'Master Vue!';
            }
        }
    }
});

app.mount('#user-goal')