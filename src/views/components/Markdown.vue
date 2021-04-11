<template>
  <div v-html="parseMarkdown"></div>
</template>

<script>
  import marked from 'marked';
  import highlight from 'highlight.js';
  import 'highlight.js/styles/atom-one-dark-reasonable.css';

  export default {
    props: ['markdown'],
    computed: {
      parseMarkdown() {
        return marked(this.markdown, {
          highlight: md => highlight.highlightAuto(md).value,
        })
      }
    },
  };
</script>

<style>
  code {
    display: block;
    overflow-x: auto;
    background: #f4f5f7;
    padding: .5em;
  }
</style>