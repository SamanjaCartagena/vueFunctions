const app = Vue.createApp({
    data(){
        return {
            courseGoalA :'Finish the course',
            courseGoalB:'<h2 style="color:black">Master Vue and build amazing apps</h2>',
            vueLink : 'https://www.samanja.dev/'
        };
    }, 
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal')