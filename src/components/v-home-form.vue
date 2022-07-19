<template>
    <div class="wrap-worm">
    <div class="headline-wrapper">
        <div class="headline font-alt">WE ARE ELEGANT</div>
        <div class="subhead font-serif">Elegance isn't solely defined by what you wear. It's how you carry yourself.</div>
    </div>
    <form class="form" v-on:submit.prevent="submit">
        <div class="united-inputs">
            <input  type="text" 
                    placeholder="Your name"
                    v-model="name">
            <input  type="email" 
                    placeholder=" Your email"
                    v-model="email">
        </div>
        <input  type="text" 
                placeholder="Subject"
                v-model="subject">
        <textarea   type="text" 
                    placeholder="Your message" 
                    id="msgInput"
                    v-model="msg"></textarea>
        <div class="wrap-button">
            <button type="submit" class="main-button">send message</button>
        </div>
    </form>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name:'v-home-form',
    data(){
        return{
            name:'',
            email:'',
            subject:'',
            msg:'',
        }
    },
    methods:{
        ...mapMutations(["submitForm"]),
        submit(){
            this.submitForm({
                name:this.name,
                email:this.email,
                subject:this.subject,
                msg:this.msg,
            })
        }
    }
}
</script>
