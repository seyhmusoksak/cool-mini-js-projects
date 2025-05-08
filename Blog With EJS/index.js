import express from "express";
import slugify from "slugify";

const app = express();
const port = 3000;

var posts = []


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

// Render homepage
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Rendering blog page
app.get("/blog", (req, res) => {
  res.render("Blog.ejs", {posts});
});


app.get("/blog/add-blog", (req, res) => {
  res.render("AddBlog.ejs");
})

// Add Blog Post
app.post("/blog/add-blog", (req, res) => {
  var slug = slugify(req.body.title)
  var post =
    {
      title: req.body.title,
      text: req.body.text,
      slug: slug
    }
  posts.push(post);
  res.redirect(301, "/blog");
})

// Rendering about page,
app.get("/blog/:slug", (req, res) => {
  const slug = req.params.slug;
  const element = posts.find((post) => post.slug === slug);
  res.render("BlogSlug.ejs", {element});
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
