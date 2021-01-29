<template>
  <section class="pt-10">
    <v-row>
      <v-col cols="12">
        <span
          class="overline d-flex align-center"
          @click="$router.go(-1)"
          :style="{ cursor: 'pointer' }"
        >
          <v-icon small class="mr-1">mdi-arrow-left</v-icon>
          <span>Go Back</span>
        </span>
      </v-col>
      <v-col cols="12" v-if="!blog && this.isGetBlogStart">
        <v-skeleton-loader type="article"></v-skeleton-loader>
      </v-col>
      <v-col cols="12" v-if="!this.isGetBlogStart && blog">
        <v-card flat color="transparent">
          <v-card-title>Blog Title</v-card-title>
          <v-card-subtitle>January 28, 2021</v-card-subtitle>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            accusantium aperiam architecto delectus eaque facilis fuga fugit, id
            incidunt minus molestiae nisi rem rerum, suscipit vero? A accusamus
            accusantium consequatur deserunt dolor, ea eligendi ex explicabo hic
            in labore laudantium libero pariatur perferendis perspiciatis
            placeat possimus quasi quia ratione similique sint soluta suscipit
            tempore ullam unde voluptate voluptatem. Aliquid, aperiam cumque
            fuga fugit in laborum magnam maiores minima nemo porro quia
            recusandae tempora, tenetur? Aliquid, assumenda dolor doloribus esse
            eveniet fugit, ipsam maxime modi obcaecati optio porro possimus qui
            quibusdam rerum sint vitae, voluptates. Explicabo impedit nesciunt
            optio quasi quo.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import sanityService from "@/services/sanity";
import commonUtility from "../../common/utility";

export default {
  data() {
    return {
      isGetBlogStart: false,
      blog: null
    };
  },

  mixins: [commonUtility],

  computed: {
    slug() {
      return this.$route.params.slug;
    }
  },

  methods: {
    async getBlog() {
      try {
        const query = "*[_type == 'post' && slug.current == $slug]";
        const parameters = { slug: this.slug };
        this.isGetBlogStart = true;
        const blog = await sanityService.fetch(query, parameters);
        if (blog.length === 0) return this.$router.go(-1);
        this.blog = blog[0];
        this.isGetBlogStart = false;
      } catch (_) {
        this.$router.go(-1);
      }
    }
  },

  async created() {
    if (!this.slug) this.$router.go(-1);
    await this.getBlog();
  }
};
</script>
