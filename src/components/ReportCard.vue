<template>
    <div class="container shape-container d-flex">

        <card shadow class="shadow-lg--hover mt-3">
            <div class="d-flex">
                <div>
                    <vue-ellipse-progress
                            :progress=progress
                            color="blue"
                            emptyColor="#8ec5fc"
                            :size="100"
                            emptyThickness="10%"
                            lineMode="in 2"
                            :legend="true"
                            :dash="`strict ${totalQuestions > 1 ? totalQuestions : 0} 0.05`"
                            :legendValue="rightQuestions"
                            fontSize="1.5rem"
                            fontColor="black">

                        <span slot="legend-value">/{{totalQuestions}}</span>


                    </vue-ellipse-progress>
                </div>
                <div class="pl-4">
                    <h5 class="title">{{title}}</h5>
                    <p>
                        {{content}}
                    </p>
                    <ul class="ul-links">
                        <li v-for="link in links" :key="link.url">
                            <a :href="link.url" class="text-warning">{{link.text}}</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </card>
    </div>
</template>
<script>
import translate from "../i18n/i18n.js";
    export default {
        name: "report-card",
        methods: {
            getLanguage(){
            return localStorage.getItem('language') || 0;
            },
            translate: function(language, phrase){
            return translate(language, phrase);
            },
        },
        props: {
            rightQuestions: {
                type: String,
                description: "Amount of questions answered right for the topic"
            },
            totalQuestions: {
                type: String,
                description: "Total of questions answered right for the topic"
            },
            progress: {
                type: Number,
                description: "Percentage of right answers 0 to 100"
            },
            title: {
                type: String,
                description: "Title of the topic"
            },
            content: {
                type: String,
                description: "Description of the topic"
            },
            links: {
                type: Array,
                description: "Links for getting better at the topic"
            }
        }
    };
</script>
<style>
    .ul-links {
        list-style: none;
    }
</style>
