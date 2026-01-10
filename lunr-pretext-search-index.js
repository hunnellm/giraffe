var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "my-great-book",
  "level": "1",
  "url": "#my-great-book",
  "type": "Book",
  "number": "",
  "title": "GIRAFFE",
  "body": " GIRAFFE  Graph Inference and Relational Analysis for Frameworks and Feature Extraction     Mark Hunnell Department of Mathematics Winston-Salem State University      My Website   copyright            About GIRAFFE   Text before the first section.    About GIRAFFE  This workshop seeks to engage undergraduate scholars, along with their faculty mentors, in an intensive week-long collaboration with students and faculty from other institutions performing original research in the areas of combinatorics and data science. WSSU students and faculty will compose the largest contingent of participants, while participants from five other institutions will be selected through an application process, with applications hosted on MathPragrams.org.  Undergraduate research has long been lauded as an efficacious high impact practice, with measurable effect one student engagement, persistence, and post graduate success. GIRAFFE seeks to foster greater community among the undergraduate researchers in the mathematical sciences at WSSU's peer institutions. Furthermore, the workshop will burnish the reputation of WSSU as a leader in scholastic achievement in the mathematical sciences. Perhaps most importantly, participants will grow their professional network with individuals possessing similar interests, thereby providing the potential for long-term benefits to participants well beyond the end of the workshop. The dual-focus of combinatorics has been chosen strategically, primarily because both subfields possess the following characteristics:  Suitability for Undergraduate Research - Both disciplines require little in the way of prerequisite knowledge in order for students to contribute meaningfully to original research products. While these areas contain significant mathematical depth, must of the required tools can be learned alongside the research activities, rather than prior to them. Furthermore, these areas are highly active and growing, and thus position students seeking graduate school opportunities to identify mentors and programs that will advance their post-graduation goals.  Problems of Interest to Student Populations - Combinatorics is a versatile approach to many real-world problems, from the distribution of power across an electrical grid, to disease transmission, to allocation of resources in war zones. The diverse set of applications means that students from a variety of educational backgrounds and with a variety of social justice interests can advance knowledge on topics they find important. Data science is inherently interdisciplinary, and our intent is to have problems focused on healthcare in the greater Forsyth area as well as a marketing problem for students who are interested in the business of sports.           Section Title  Text of section.     Travel   Text before the first section.      Applications   Text before the first section.      Project Descriptions   Below you will find the project descriptions. In your application, you will be asked to rank your level of interest in each of the projects. Faculty members and the students from their institution will paired together with a project before the workshop begins. Please email Mark Hunnell (hunnellm@wssu.edu) with any questions.   Fault Tolerant Zero Forcing        Backmatter       This book was authored in PreTeXt .    "
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
