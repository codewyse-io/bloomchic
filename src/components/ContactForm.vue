<template>
    <section class="contact_form">
        <div class="container">
            <div class="row">
    <div class="col-md-12">
        <div class="main_contact_form">
            <h2>Contact us</h2>
            <p>Does your question concern an online order? You can check out the status of your order by logging <a href=""> into your account.</a></p>
            <p>Questions about your order? Please write to ecom@veronneau.com or <a href=""> fill the return form by clicking here</a> if you wish to request a return/refund or report a problem with your order.</p>
            <p>For other questions, please fill in the form below.</p>
            <form action="">
                <div class="row">
                    <div class="col-md-6">
                        <div class="input_field">
                            <label for="last_name">Last name</label>
                            <input type="text" name="last_name" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input_field">
                            <label for="first_name">First name</label>
                            <input type="text" name="first_name" required>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="input_field">
                            <label for="email">Email</label>
                            <input type="text" name="email" required>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="input_field">
                            <label for="message">Message</label>
                            <textarea type="text" name="message" required></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="input_field">
                            <label for="subject">Subject of your request</label>
                            <select name="subject" required>
                                <option value="Marketing" selected>Marketing</option>
                                <option value="Online orders">Online orders</option>
                                <option value="Purchases (for suppliers)">Purchases (for suppliers)</option>
                                <option value="Administration">Administration</option>
                                <option value="Informations">Informations</option>
                                <option value="Sales (for customers)">Sales (for customers)</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="input_field">
                            <input type="submit" value="Submit">
                        </div>
                    </div>
                </div>
            </form>

            <div class="second_map">
                <p>By clicking submit, you agree to our<a href=""> privacy policy.</a></p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.4137868129255!2d-73.75035272476228!3d45.58222592555747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9215fc3d22371%3A0xea1ae482d238f6a7!2s2965%20Boul.%20le%20Corbusier%2C%20Laval%2C%20QC%20H7L%203M3%2C%20Canada!5e0!3m2!1sen!2s!4v1714179716059!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    </div>
</div>
        </div>
    </section>

</template>
