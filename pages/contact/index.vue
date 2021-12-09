<template>
<div class="flex flex-col items-center justify-center">
    <div class="flex flex-col md:flex-row p-5 lg:w-3/4 md:w-2/3 mx-auto">
        <div class="flex flex-wrap p-5 w-full">
            <div class="p-2 w-full flex flex-col md:flex-row">
                <div class="relative p-1 w-full md:w-1/2">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full input input-primary" v-model="form.email">
                </div>
                <div class="relative p-1 w-full md:w-1/2">
                    <label for="orderNumber" class="leading-7 text-sm text-gray-600">Order Number</label>
                    <input type="text" id="orderNumber" name="orderNumber" class="w-full input input-primary">
                </div>
            </div>
            <div class="p-2 w-full flex flex-col md:flex-row">
                <div class="relative p-1 w-full md:w-1/2">
                    <label for="firstName" class="leading-7 text-sm text-gray-600">First Name</label>
                    <input type="text" id="firstName" name="firstName" class="w-full input input-primary" v-model="form.firstName">
                </div>
                <div class="relative p-1 w-full md:w-1/2">
                    <label for="lastName" class="leading-7 text-sm text-gray-600">Last Name</label>
                    <input type="text" id="lastName" name="lastName" class="w-full input input-primary" v-model="form.lastName">
                </div>
            </div>

            <div class="form-control p-2 w-full">
                <label class="label">Message
                </label>
                <textarea class="textarea h-24 textarea-bordered" placeholder="Message" v-model="form.message"></textarea>
            </div>

            <div class="p-2 w-full">
                <button class="btn btn-primary" @click="submitForm">Send</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
const siteURL = process.env.WORDPRESS_API_URL;
export default {
    name: 'ContactPage',
    components: {},
    data() {
        return {
            form: {
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'janedoe@email.com',
                message: 'Test'
            },
            url: `${siteURL}/contact-form-7/v1/contact-forms/35/feedback`
        }
    },
    methods: {
        submitForm() {
            // 1. Format your body response
            const emailBody = {
                "your-name": this.form.firstName,
                "your-subject": 'Test',
                "your-email": this.form.email,
                "your-message": this.form.message,
            };

            // 2. Create a FormData object, and append each field to the object
            const form = new FormData();
            for (const field in emailBody) {
                form.append(field, emailBody[field]);
            }
            this.$axios.post(this.url, form)
                .then((response) => {
                    console.log(response);
                    alert(response.data.message);
                    // this.errors = [];
                })
                .catch((error) => {
                    // this.errors = error.response.data.message
                });
        }
    },
}
</script>
