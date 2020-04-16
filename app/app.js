new Vue( 
    {
        el: '#app',
        data(){
            return{
                users: null,
                tasks: null,
                newUser: { 
                    name: null,
                    email: null,
                    age: null,
                    password: null
                },
                formPostStatus: null,
                formPostResponse: null
            }
        },
        methods:{
            postNewUser(){

                axios.post('http://192.168.1.14:3000/users',this.newUser)
                .then((res)=>{ 
                    console.log('axios response received')
                    this.formPostStatus=res.status
                    this.formPostResponse = "Success!"
                    this.newUser.name = null
                    this.newUser.email = null
                    this.newUser.age = null
                    this.newUser.password = null
                    this.getUsers()
                   
                })
                .catch((err)=>{
                    this.formPostStatus=400
                    this.formPostResponse=err.response.data
                })
            },
            getUsers(){
                axios.get('http://192.168.1.14:3000/users')
                .then( response => this.users=response.data)
            },
            getTasks(){
                axios.get('http://192.168.1.14:3000/tasks')
                .then( response=>this.tasks=response.data)
            }
        },
        mounted(){
            this.getUsers()
            this.getTasks()
        }
    });