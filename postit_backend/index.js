const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express()
app.use(bodyParser({ extended: true }))
app.use(cors());

const port = process.env.PORT || 3000;

let posts = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, officiis in.",
  "Aspernatur cupiditate blanditiis soluta voluptatibus, unde velit labore accusamus sunt numquam nihil optio eaque. Eos, aliquid.",
  "Commodi sapiente aliquam unde veniam asperiores ratione optio maiores, quidem autem dicta vero nesciunt adipisci aut sit vel cumque quaerat.",
  "Aliquam illum voluptate non error ad facilis doloribus, exercitationem, aspernatur vero ducimus sunt?",
];

app.get('/', (req, res) => {
  return res.status(200).send("Hello from the backend");
})

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;

  return res.status(200).send(posts[id]);
})

app.get('/posts', (req, res) => {
  return res.status(200).send(posts);
})

app.post('/posts', (req, res) => {
  const { postContent } = req.body;
  posts.push(postContent);

  return res.status(200).send(postContent)
})

app.delete('/posts', (req, res) => {
  const { id } = req.query;

  posts = posts.filter((post, index) => {
    return index != id;
  });

  return res.status(200).send(id);
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})