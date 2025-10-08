<template>
<div>
     <h1 class="text-4xl font-bold mb-4 text-white z-50">Contact Me</h1>
     <em><h2 class="text-white text-xl animate-fadeInRight delay-[200ms]">"Your ideas, my code — let’s connect.”</h2></em>
    <div class="get-in-touch text-white mb-12 animate-fadeInRight delay-[400ms]">
    <p>If you like my work, let’s connect! I’d be happy to meet over a coffee <i class="fa fa-1x fa-mug-hot"></i> or schedule a call to discuss your ideas, projects, or business needs.</p>
    </div>

    <div class="max-w-2xl mx-auto my-24 bg-blur-50 bg-white/50 dark:bg-gray-900/60 p-8 rounded-lg shadow-lg backdrop-blur-sm">
        <form action="https://formspree.io/f/mnqylgwp" method="POST" class="space-y-6">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" id="name" name="name" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" id="email" name="_replyto" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" name="message" rows="4" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
            </div>
            <div>
                <button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send Message</button>
            </div>
        </form>
    </div>
</div>
    <!-- <div class="map"><iframe class=" w3-round-small" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.67410129952!2d-79.54286532941383!3d43.718122804313964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1759361091927!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div> -->
</template>
<script>
import { ref } from 'vue'
export default {
    name: 'Contact',
    setup() {
        const showSidebar = ref(false);
        return { showSidebar }
    }
}
</script>