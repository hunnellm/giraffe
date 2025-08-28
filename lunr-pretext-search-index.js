var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "my-great-book",
  "level": "1",
  "url": "#my-great-book",
  "type": "Book",
  "number": "",
  "title": "GIRAFFE",
  "body": " GIRAFFE  Graph Inference and Relational Analysis for Frameworks & Feature Extraction      About GIRAFFE   The GIRAFFE Workshop is a week-long, collaborative event held at WSSU with the goal of fostering original research with undergraduate students in the mathematical sciences. The program is focused on mentorship, hands-on learning, and the development of research skills in the mathematical sciences. A particular emphasis is placed on combinatorics and data science for their real-world applications and low start-up cost for students with a wide range of mathematical maturity. The workshop employs a model proven effective in a variety of settings supported by the mathematical science institutes, including the American Institute of Mathematics and SLMath.      Travel  Text of section.    Typical Daily Schedule      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
