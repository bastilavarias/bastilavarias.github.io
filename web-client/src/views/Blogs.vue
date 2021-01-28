<template>
  <section class="pt-10">
    <v-row>
      <v-col cols="12">
        <span class="overline">Blogs</span>
      </v-col>
      <v-col cols="12">
        <template v-for="(blog, index) in blogs">
          <v-list-item :key="index" three-line>
            <v-list-item-content>
              <v-list-item-title
                ><router-link :to="blog.to" :style="{ textDecoration: 'none' }">
                  <span class="font-weight-bold text--primary">{{
                    blog.title
                  }}</span>
                </router-link></v-list-item-title
              >
              <v-list-item-subtitle>{{ blog.excerpt }}</v-list-item-subtitle>
              <v-list-item-subtitle
                >Created {{ blog.date }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: "Blog 1",
          excerpt: "Excerpt 1",
          date: "January 28, 2021",
          to: { name: "Blog Item Page", params: { slug: "blog-1" } }
        },

        {
          title: "Blog 2",
          excerpt: "Excerpt 2",
          date: "January 28, 2021",
          to: { name: "Blog Item Page", params: { slug: "blog-2" } }
        },

        {
          title: "Blog 3",
          excerpt: "Excerpt 3",
          date: "January 28, 2021",
          to: { name: "Blog Item Page", params: { slug: "blog-3" } }
        }
      ]
    };
  }
};
</script>
