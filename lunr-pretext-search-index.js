var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "giraffe-site",
  "level": "1",
  "url": "#giraffe-site",
  "type": "Article",
  "number": "",
  "title": "GIRAFFE",
  "body": " GIRAFFE  Graph Inference and Relational Analysis for Frameworks and Feature Extraction   GIRAFFE - Undergraduate Research Workshop in Graph Theory and Data Science     About GIRAFFE  This workshop seeks to engage undergraduate scholars, along with their faculty mentors, in an intensive week-long collaboration with students and faculty from other institutions performing original research in the areas of combinatorics and data science. WSSU students and faculty will compose the largest contingent of participants, while participants from five other institutions will be selected through an application process, with applications hosted on MathPragrams.org.    Logistical Information  The workshop will be held on the campus of Winston-Salem State University from Sunday, June 16, 2024 through Saturday, June 22, 2024. Participants will be housed in university residence halls, and meals will be provided in campus dining facilities. A detailed schedule of events will be provided to accepted participants prior to the start of the workshop.     Application Information Applications are due by March 1, 2024. Applicants will be notified of acceptance by March 15, 2024. To apply, please visit mathprograms.org .     Faculty Contact Information For questions regarding the workshop, please contact Mark Hunnell at hunnellm@wssu.wsu.     Travel Information Participants are responsible for arranging their own travel to and from Winston-Salem, NC.         About GIRAFFE    Undergraduate research has long been lauded as an efficacious high impact practice, with measurable effect one student engagement, persistence, and post graduate success. GIRAFFE seeks to foster greater community among the undergraduate researchers in the mathematical sciences at WSSU's peer institutions. Furthermore, the workshop will burnish the reputation of WSSU as a leader in scholastic achievement in the mathematical sciences. Perhaps most importantly, participants will grow their professional network with individuals possessing similar interests, thereby providing the potential for long-term benefits to participants well beyond the end of the workshop. The dual-focus of combinatorics has been chosen strategically, primarily because both subfields possess the following characteristics:  Suitability for Undergraduate Research - Both disciplines require little in the way of prerequisite knowledge in order for students to contribute meaningfully to original research products. While these areas contain significant mathematical depth, must of the required tools can be learned alongside the research activities, rather than prior to them. Furthermore, these areas are highly active and growing, and thus position students seeking graduate school opportunities to identify mentors and programs that will advance their post-graduation goals.  Problems of Interest to Student Populations - Combinatorics is a versatile approach to many real-world problems, from the distribution of power across an electrical grid, to disease transmission, to allocation of resources in war zones. The diverse set of applications means that students from a variety of educational backgrounds and with a variety of social justice interests can advance knowledge on topics they find important. Data science is inherently interdisciplinary, and our intent is to have problems focused on healthcare in the greater Forsyth area as well as a marketing problem for students who are interested in the business of sports.     Logistical Information     Section Title  Text of section.          Backmatter       This website was authored in PreTeXt .    "
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
