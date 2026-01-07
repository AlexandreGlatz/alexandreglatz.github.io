<template>
    <div id="contact_form">
      <form action="https://formsubmit.co/lesgamers2008@gmail.com" method="POST">
        <h2>Contact Me</h2>
        <label>First Name / Company</label>
        <input type="text" v-model="name" placeholder="John">
        <label>Email</label>
        <input type="email" v-model="email" placeholder="example@domain.tld">
        <label>Subject</label>
        <input type="text" v-model="subject" placeholder="About">
        <label>Message</label>
        <textarea v-model="message" cols="30" rows="10" placeholder="Message here"></textarea>
        <button id="send_btn" type="submit">Send</button>
      </form>
      <p v-if="info" :class="infoClass" :style="infoStyle">{{ info }}</p>
      <Copyright/>
    </div>
</template>
  
<script lang="ts">
</script>
  
<style>
label {
    font-size: 17px;
    font-weight: 100;
    margin:5px 0;
    text-transform: capitalize;
    letter-spacing: 1px;
}

#contact_form {
    display: flex;
    align-items: center;
    height: 100px;
    flex-direction: column;
    margin-top: 200px;
}

.request_message {
    width: 400px;
    text-transform: capitalize;
    background-color: #0095FF;
    text-align: center;
    font-size: 13px;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: 0 0 8px rgba(0, 149, 255, 0.5);
    animation: display_message 0.5s ease-out;
}

@keyframes display_message {
    from {
        transform: translateY(-70px);
    }
}

form {
    outline: 1px solid #2E328E;
    background-color: rgba(0,0,0,0.5);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
    width: 80%;
    padding: 20px;
    padding-top: 0;
    @media (min-width: 1000px) {
        max-width: 1000px;
        font-size: 17px;
        width: 60%;
    }
}

form h2 {
    color: #edf0f1;
    font-size: 35px;
    text-align: center;
}

input, textarea {
    padding: 8px;
    resize: none;
    outline: 0;
    border: 2px solid #2E328E;
    border-radius: 4px;
}

#send_btn {
    border-radius: 50px;
    background-color: #0095FF;
    padding: 10px;
    margin-top: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 0;
}

#send_btn:hover {
    box-shadow: 0 0 8px rgba(0,149,255,0.5);
    cursor: pointer;
}
</style>
  
