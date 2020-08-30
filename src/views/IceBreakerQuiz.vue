<template>
  <ProjectHeader name="Ice Breaker Quiz" route="/projects/icebreakerquiz" />
  <div class="celebrityQuiz">
    <p class="description">Fun game to to get to know your group better!</p>
    <div v-if="questions.length === 0" class="pick">Enter details.</div>
    <div v-else class="answerPrompt">
      <h2>{{ randomTarget }},</h2>
      <h2>{{ randomQuestion }}</h2>
    </div>
  </div>
</template>

<script>
import ProjectHeader from "../components/ProjectHeader.vue";

export default {
  name: "CelebrityQuiz",
  components: {
    ProjectHeader,
  },
  data: function () {
    return {
      questions: [
        { text: "What's your best childhood memory?", ownerId: 1 },
        { text: "How would you describe a good day in your life?", ownerId: 1 },
        { text: "What's your favorite quote and why?", ownerId: 1 },
        { text: "Which is your favorite book and why?", ownerId: 2 },
        {
          text: "If you could have a superpower, what would you choose?",
          ownerId: 1,
        },
      ],
      members: [
        { name: "Nevin", id: 1 },
        { name: "Dinesh", id: 2 },
        { name: "Heena", id: 3 },
      ],
    };
  },
  computed: {
    randomQuestion: function () {
      const index = Math.floor(Math.random() * this.questions.length);
      return this.questions[index].text;
    },
    randomTarget: function () {
      const index = Math.floor(Math.random() * this.members.length);
      return this.members[index].name;
    },
  },
};
</script>

<style scoped>
.celebrityQuiz{
    text-align: center;
}

.description {
    margin-bottom: 50px;
}
.answerPrompt {
  border: solid 1px gray;
  padding: 20px;
}

@media only screen and (max-width: 600px) {
  .about {
    width: 90%;
  }
  .about p {
    font-size: 0.9rem;
  }
}
</style>
