<template>

    <div class="hello">
<!--        <img alt="Vue logo" src="../assets/logo.png">-->

        <h1>{{ msg }}</h1>
        <hr>
        <div class="languages-info">
            <div class="columns">
                <div class="column column-style" v-for="language in languages" :key="language.id">
                    <div class="card">
                        <div class="card-image">
                            <img :alt="language.name" :src="language.image">
                        </div>

                        <div class="card-content">
                            <div class="info" :class="{'color-box' : isBest(language)}">
                                <h3 v-text="language.name"></h3>
                                <li v-if="language.isScripting">Scripting: Yes</li>
                                <li v-else>Scripting: No</li>
                                <li>Number of votes: {{language.votes}}</li>
                            </div>
                        </div>

                        <div class="card-footer">
                            <button @click="addVote(language)" class="has-background-success">Vote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Mastery',
        data() {
            return {
                languages: [
                    {
                        id: 1,
                        name: 'PHP',
                        image: "../assets/php-logo.jpg",
                        isScripting: true,
                        votes: 0
                    },
                    {
                        id: 2,
                        name: 'JS',
                        image: "@/assets/img/clear.gif",
                        isScripting: true,
                        votes: 0
                    },
                    {
                        id: 3,
                        name: 'Java',
                        image: "../assets/img/clear.gif",
                        isScripting: false,
                        votes: 0
                    }
                ]
            }
        },
        methods: {
            addVote(selectedLanguage) {
                this.languages.forEach(value => {
                    if (selectedLanguage.id === value.id) {
                        value.votes++;
                    }
                });
            },
            isBest(language) {
                let maxVotes = Math.max.apply(Math, this.languages.map(
                        function (item) {
                            return item.votes;
                        }
                    )
                );

                return maxVotes === language.votes;
            }
        },
        props: {
            msg: {
                type: String,
                required: true
            }
        }
    }
</script>

<style>
    .column-style {
        background: lightgoldenrodyellow;
    }
    .color-box {
        width: 100%;
        height: 100%;
        background-color: bisque;
    }
</style>