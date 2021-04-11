<template>
  <div>
    <div class="container shape-container d-flex">
      <div class="col px-0">
        <div class="card shadow p-3 mb-5 bg-white rounded">
          <div class="card-body">
            <slot name="title"></slot>
              <slot name="body"></slot>
            <div class="form-check">
              <input v-model="radioMiddle" @change="answerWasChanged()" class="form-check-input" type="radio" name="RadioAnswer" id="RadioAnswer1" value="0">
              <label class="form-check-label" for="RadioAnswer1">
                <slot name="answer1"></slot>
              </label>
            </div>
            <div class="form-check">
              <input v-model="radioMiddle" @change="answerWasChanged()" class="form-check-input" type="radio" name="RadioAnswer" id="RadioAnswer2" value="1">
              <label class="form-check-label" for="RadioAnswer2">
                <slot name="answer2"></slot>
              </label>
            </div>
            <div class="form-check">
              <input v-model="radioMiddle" @change="answerWasChanged()" class="form-check-input" type="radio" name="RadioAnswer" id="RadioAnswer3" value="2">
              <label class="form-check-label" for="RadioAnswer3">
                <slot name="answer3"></slot>
              </label>
            </div>
            <div class="form-check">
              <input v-model="radioMiddle" @change="answerWasChanged()" class="form-check-input" type="radio" name="RadioAnswer" id="RadioAnswer4" value="3">
              <label class="form-check-label" for="RadioAnswer4">
                <slot name="answer4"></slot>
              </label>
            </div>
            <br>
            <div class="form-check">
              <input v-model="radioMiddle" @change="answerWasChanged()" class="form-check-input" type="radio" name="RadioAnswer" id="RadioAnswer5" value="4" checked>
              <label class="form-check-label" for="RadioAnswer5">
                <slot name="answer5"></slot>
              </label>
            </div>

            <div class="row justify-content-center text-center ">
              <slot name="button"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "question",
  data() {
    return {
    radioMiddle: this.radioAnswer,
    }
  },
  watch:{
    radioAnswer(){
      this.radioMiddle = this.radioAnswer;
    }
  },
  props: {
    radioAnswer: String,
  },
  methods: {
    answerWasChanged() {
      this.$emit("answerWasChanged", this.radioMiddle)
    }
  }
};
</script>

<style scoped>
input[type="checkbox"]:not(old), input[type="radio"]:not(old) {
    cursor: pointer;
}

label.form-check-label {
    cursor: pointer;
}

label.form-check-label:hover {
    color: #8897EB;
}

</style>>


