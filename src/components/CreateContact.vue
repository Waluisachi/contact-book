<template >
  <div class="container">
    <div class="title">
      Add New Contact
    </div>
    <div class="form" @submit.prevent="onSubmitform">
      <div class="input_fields">
        <label>First Name</label>
        <input v-model="form.firstName" type="text" class="input">
      </div>
      <div class="input_fields">
        <label>Last Name</label>
        <input type="text" v-model="form.lastName"  class="input">
      </div>

      <div class="input_fields">
        <label>E-mail</label>
        <input type="email" v-model="form.email" class="input">
      </div>

      <div class="input_field">
        <button class="btn btn-success" type="submit" name="button">Create Contact</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createContact } from "@/firebase";
import { reactive } from "vue";

  export default {
    setup(){
    const form = reactive({ firstName: '', lastName: '', email: '' })


    const onSubmitform = async () => {
      console.log(form);
      await createContact({ ...form })
      form.firstName = ""
      form.lastName = ""
      form.email = ""
    };

    return { form, onSubmitform };
  },
    name: "CreateContacts",
  }
</script>

<style scoped>
*{
  /* margin: 0;
  padding: 0; */
  box-sizing: border-box;
  }

body {
  /* background: linear-gradient(108deg, rgba(1, 147, 122, 1) 0%, rgba(10, 201, 122, 1) 100%); */
  padding: 0 10px;
  }

.container {
  margin-top: 15px;
  max-width: 500px;
  width: 100%;
  background: #ccc;
  margin: 20px auto;
  padding: 30px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

.container .title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
  color: rgba(10, 201, 122, 1);
  text-transform: uppercase;
  text-align: center;
  }

.container .form {
  width: 100%;
  }

.container .form .input_fields {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  }

.container .form .input_fields label {
   width: 200px;
   color: #111;
   margin-right: 10px;
   font-size: 14px;
  }

.container .form .input_fields .input,
.container .form .input_fields .textarea {
  width: 100%;
  outline: none;
  border: 1px solid #01bf71;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 3px;
  transition: all 0.3s ease;
  }

.container .form .input_fields .textarea {
  resize: none;
  height: 125px;
  }

.container .form .input_fields .custom_selector {
  position: relative;
  width: 100%;
  height: 37px;
  }

.container .form .input_fields .custom_selector select {
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid #01bf71;
  width: 100%;
  height: 100%;
  padding: 8px 10px;
  border-radius: 3px;
  }

.container .form .input_fields .custom_selector:before{
  content: "";
  position: absolute;
  top: 12px;
  right: 10px;
  border: 8px solid;
  border-color: #01bf71 transparent transparent transparent;
  pointer-events: none;
  }

.container .form .input_fields .input:focus,
.container .form .input_fields .textarea:focus,
.container .form .input_fields select:focus  {
  border: 1px solid #fec107;
  }

.container .form .input_fields p {
  font-size: 14px;
  color: #757575;
  }

.container .form .input_fields .check {
  width: 15px;
  height: 15px;
  position: relative;
  display: block;
  cursor: pointer;
  }

.container .form .input_fields .check input[type="checkbox"] {
  position: absolute;
  top:0;
  left: 0;
  opacity: 0;
  }

.container .form .input_fields .check .checkmark {
   width: 15px;
   height: 15px;
   border: 1px solid #fec107;
   display: block;
   position: relative;
   background: green;
  }

.container .form .input_fields .check .checkmark::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 2px;
  border: 2px solid;
  border-color: transparent transparent #fff #fff;
  }
</style>
