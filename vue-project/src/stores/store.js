import { defineStore } from 'pinia';

export const useDiaryStore = defineStore({
  id: 'diary',
  state: () => ({
    posts: [
      {
        id: 1,
        title: "Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой. Это будет замечательный вечер!",
        comments: [
          { id: 1, text: "Это самый яркий комментарий в этом посте. Он действительно заставляет задуматься." },
          { id: 2, text: "Это один из бессмысленных комментариев в этом посте. Видимо, автор просто хотел что-то сказать." }
        ]
      },
      {
        id: 2,
        title: "Краткосрочное вымышленное преломление может выполнять особую роль в пространстве главной роли игрока, но только в том случае, если мы рассматриваем основы программирования как часть архитектуры. ",
        comments: [
          { id: 1, text: "Этот комментарий очень научный и интересный. Он действительно расширяет мои знания!" },
        ]
      }
    ]
  }),
  actions: {
    addPost(newPost) {
      this.posts.push(newPost);
    },
    deletePost(postId) {
      this.posts = this.posts.filter(post => post.id !== postId);
    },
    updatePost(updatedPost) {
      const index = this.posts.findIndex(post => post.id === updatedPost.id);
      if (index !== -1) {
        this.posts[index] = updatedPost;
      }
    },
    addComment({ postId, comment }) {
      const post = this.posts.find(post => post.id === postId);
      if (post) {
        console.log("Добавление комментария "+comment.text+" к посту с ID "+postId);
        post.comments.push(comment);
      }
    },
    deleteComment({ postId, commentId }) {
      const post = this.posts.find(post => post.id === postId);
      if (post) {
        post.comments = post.comments.filter(comment => comment.id !== commentId);
      }
    }
  }
});
