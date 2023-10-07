<template>
  <div class="container mx-auto px-4 md:px-0">
    <h1 class="title text-center my-6 font-bold">Casey Wittner</h1>
    <div class="grid md:grid-cols-4 xs:grid-cols-1 gap-4 mb-4">
      <div class="md:col-start-2 md:col-span-2">
        <div class="hazard-stripes text-sm text-white rounded-md p-4 text-center" role="alert">
          <p><strong>Under Construction</strong></p>
          <p>Pardon my dust! This website is currently under construction and will be expanded soon.</p>
        </div>
      </div>
    </div>
    <nav class="flex space-x-6">
      <a class="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-blue-500 hover:text-blue-700" target="_blank" href="https://www.linkedin.com/in/casey-wittner-10655a39/">
        LinkedIn
      </a>
      <a class="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-blue-500 hover:text-blue-700" target="_blank" href="https://github.com/caseywittner">
        GitHub
      </a>
      <a class="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-blue-500 hover:text-blue-700" href="mailto: casey.wittner@gmail.com">
        Email
      </a>
      <a class="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-blue-500 hover:text-blue-700" href="tel:9144390906">
        Phone
      </a>
    </nav>
    <div class="grid md:grid-cols-3 xs:grid-cols-1 gap-4 mb-4">
      <div class="col-span-1" v-for="card in cards">
        <card :title="card.title" :text="card.text" :img="card.img" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/card'
import javascript_card from '~/assets/img/javascript_card.png'
import htmlcss_card from '~/assets/img/htmlcss_card.png'
import wireframing_card from '~/assets/img/wireframing_card.png'
import apis_card from '~/assets/img/apis_card.png'
import projectmanagement_card from '~/assets/img/projectmanagement_card.png'
import mentorship_card from '~/assets/img/mentorship_card.png'

export default {
  components: { Card },
  data() {
    return {
      cards: {
        javascript: {
          text: 'Experienced in working with modern JavaScript frameworks like Vue/Nuxt, and React to create high-traffic, high-performance web applications.',
          title: 'JavaScript Frameworks',
          img: javascript_card
        },
        htmlcss: {
          text: 'Over a decade of experience creating beautiful frontend web experiences using HTML, CSS, and SASS for a variety of clients with different needs.',
          title: 'HTML/CSS',
          img: htmlcss_card
        },
        wireframing: {
          text: 'A background in graphic design has led to a passion for intentional and functional UI/UX design, often prototyped with tools like Figma.',
          title: 'Wireframing and Prototyping',
          img: wireframing_card
        },
        apis: {
          text: 'No application is complete without a robust backend, including RESTful APIs written in languages like PHP, Golang and more as part of developing a full stack.',
          title: 'API Developement and Support',
          img: apis_card
        },
        projectmanagement: {
          text: 'PSM-1 certified by Scrum, experienced in managing sprints in an Agile development environment, and interacting regularly with interdepartmental stakeholders.',
          title: 'Project Management',
          img: projectmanagement_card
        },
        mentorship: {
          text: 'Experienced in helping junior developers grow into full engineering roles through regular experience sharing and the curation of professional development paths.',
          title: 'Mentorship',
          img: mentorship_card
        },
      }
    }
  }
}
</script>

<style>
body {
  min-height: 100vh;
}
.title {
  font-size: 48px;
  font-family: Roboto Condensed, sans-serif
}
body {
  font-family: Roboto, sans-serif;
  background: radial-gradient(ellipse at bottom left, #61DBFB 0, transparent 25%),
  radial-gradient(ellipse at bottom right, #00DC82 0, transparent 25%);

}
.hazard-stripes {
  background: repeating-linear-gradient(
      45deg,
      #a9a357,
      #beac04 30px,
      #252424 30px,
      #020202 60px
  );
  text-shadow: 1px 1px 2px black;
}
</style>
