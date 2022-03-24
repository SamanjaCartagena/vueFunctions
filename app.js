const app = Vue.createApp({
    data(){
        return {
            courseGoalA :'Finish the course ',
            courseGoalB:'Master Vue and build amazing apps',
            vueLink : 'https://www.samanja.dev/'
        };
    }, 
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.coarseGoalA;
            }
            else{
                return this.coarseGoalB;
            }
        }
    }
});

app.mount('#user-goal')