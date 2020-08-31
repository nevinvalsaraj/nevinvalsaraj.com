<template>
  <ProjectHeader name="Ice Breaker Quiz" route="/projects/icebreakerquiz" />
  <div class="celebrityQuiz">
    <p class="description">Fun game to get to know your group better!</p>

    <!-- Enter questions -->
    <div v-if="randomQuestionIndex < 0" class="readInput">
      <h3>Enter questions and player names.</h3>
      <textarea
        v-model="textInput"
        placeholder="Enter questions in format '<question> - <submitted_by>'"
      ></textarea>
      <button v-on:click="parseInput">Start</button>
    </div>

    <!-- Show prompts -->
    <div v-else class="showPrompt">
      <h2>{{ players[randomPlayerIndex][0].toUpperCase() + players[randomPlayerIndex].slice(1) }},</h2>
      <h2>{{ questions[randomQuestionIndex].text }}</h2>
      <button class="btnRegenerate" v-on:click="computeNextPrompt">Next question</button>
    </div>
  </div>
</template>

<script>
import ProjectHeader from "../components/ProjectHeader.vue";

export default {
  name: "IceBreakerQuiz",

  components: {
    ProjectHeader,
  },

  data: function () {
    return {
      questions: [],
      players: [],
      randomQuestionIndex: -1,
      randomPlayerIndex: -1,
      textInput: "",
    };
  },

  methods: {
    computeNextPrompt: function () {
      if (this.randomQuestionIndex == -1 || this.randomPlayerIndex == -1) {
        this.randomQuestionIndex = Math.floor(
          Math.random() * this.questions.length
        );
        this.randomPlayerIndex = Math.floor(
          Math.random() * this.players.length
        );
        return;
      }

      let qIndex, pIndex;
      do {
        qIndex = Math.floor(Math.random() * this.questions.length);
        pIndex = (this.randomPlayerIndex + 1) % this.players.length;
      } while (
        // don't ask questions submitted by themselves
        this.questions[qIndex].askedBy === pIndex
      );
      this.randomQuestionIndex = qIndex;
      this.randomPlayerIndex = pIndex;
    },

    parseInput: function () {
      let lines = this.textInput.split("\n");
      lines.forEach((line) => {
        if (!line.length) return;
        let a = line.split("-");
        let question = a[0].trim();
        let player = a[1].trim().toLowerCase();
        if (!this.players.includes(player)) {
          this.players.push(player);
        }
        this.questions.push({
          text: question,
          askedBy: this.players.indexOf(player),
        });
      });
      this.computeNextPrompt();
    },
  },
};
</script>

<style scoped>
.celebrityQuiz {
  text-align: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.description {
  margin-bottom: 30px;
}
.readInput {
  width: 90%;
  padding: 20px;
}

.showPrompt {
  border: solid 1px gray;
  width: 90%;
  padding: 20px;
}
textarea {
  width: 100%;
  text-align: center;
  padding: 15px;
}
button {
  background: transparent;
  color: #333;
  font-weight: 600;
  border: solid 1px #333;
  margin: 20px 0;
  padding: 15px 15px;
}
button:hover {
  background: gray;
  color: white;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .celebrityQuiz {
    width: 90%;
  }
}
</style>
