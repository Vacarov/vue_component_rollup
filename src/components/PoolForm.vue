<template>
    <div>
        <form name="pool" @submit.prevent="onSubmit">
            <p>
                <label for="name">Name: </label>
                <input id="name" v-model="name">
            </p>

            <p>
                <label :for="review">Review: </label>
                <input id="review" v-model="review">
            </p>

            <p>
                <label for="rating">Rating: </label>
                <select id="rating" v-model.number="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </p>

            <p>
            <input type="submit">
            </p>
        </form>
    </div>
</template>

<script>
    export default {
        name: "PoolForm",
        data() {
            return {
                name: null,
                review: null,
                rating: null,
            }
        },
        methods: {
            onSubmit() {
                let createdObject = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                };

                this.$emit('review-submitted', createdObject);

                this.name = null;
                this.review = null;
                this.rating = null;
            }
        }
    }
</script>

<style scoped>

</style>