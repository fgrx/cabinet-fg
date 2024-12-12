<script setup>
import { ref } from "vue";
import fabImage from "../../assets/img/calendar2.svg";
import Btn from "./Btn.vue";
import ContactForm from "./ContactForm.vue";

const showModal = ref(false);

const toggleModal = () => (showModal.value = !showModal.value);
</script>

<template>
  <button
    @click="toggleModal"
    title="Contact Sale"
    class="fixed z-90 bottom-10 right-8 bg-primary w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 hover:drop-shadow-4xl hover:animate-bounce duration-300"
  >
    <img :src="fabImage.src" alt="icone de chat" height="48px" width="48px" />
  </button>

  <div
    v-if="showModal"
    class="overflow-x-hidden overflow-y-auto mx-4 fixed inset-0 z-50 animate pop"
  >
    <div class="relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class="border-0 rounded-lg shadow-lg bg-gray-100">
        <!--header-->
        <div class="flex items-start justify-between p-5 rounded-t">
          <h2 class="text-4xl text-center font-semibold">
            Prise de rendez-vous
          </h2>

          <button
            class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
            v-on:click="toggleModal()"
          >
            ×
          </button>
        </div>
        <!--body-->
        <div class="px-6 pt-2 flex-auto items-start">
          <div>
            <h3 class="text-2xl font-semibold">
              Prendre rendez-vous par téléphone
            </h3>
            <p>Vous pouvez me contacter au 07.66.83.65.71</p>

            <div class="text-center md:text-left">
              <a href="tel:07.66.83.65.71">
                <Btn client:load color="primary"
                  >📞 Me téléphoner ou m'envoyer un SMS</Btn
                >
              </a>
            </div>
          </div>
          <hr class="my-10" />
          <div>
            <h3 class="text-2xl font-semibold">Prendre rendez-vous par mail</h3>
            <ContactForm
              client:load
              @close-form="toggleModal()"
              class="text-left items-start"
              :hasCloseButton="true"
            ></ContactForm>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<style scoped>
.animate.pop {
  animation-duration: 0.5s;
  animation-name: animate-pop;
  animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
}

@keyframes animate-pop {
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}
</style>
